import {Risco} from '../models/riscosModel.js'
import {GetSquare} from '../helper/squareHelper.js'
import {validaInt, validaPreenchido, validaTamanho, validaFloat} from "../helper/validacaoHelper.js";

export async function GetRiscos(req, res) {
    try {
        const riscos = await Risco.findAll({
            attributes: ['coox', 'cooy', 'grau_risco', 'grau_vulne', 'num_pessoa']
        });

        const polygonDataArray = riscos.map((risco) => {
            let grau_risco = risco.dataValues.grau_risco
            let index = risco.dataValues.num_pessoa / 10;
            let grau_vulne = risco.dataValues.grau_vulne;


            const x = risco.dataValues.coox
            const y = risco.dataValues.cooy
            let square = GetSquare(x, y);
            return {

                type: "Feature",
                properties: {
                    name: `Polygon ${risco.id}`,
                    index: index,
                    grau_vulne,
                    grau_risco,
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [square],
                },
            };
        });


        res.json(polygonDataArray)
    } catch (error) {
        console.error(error)
    }
}

export async function EnrollRisco(req, res) {
    const {num_rel, cooX, cooY, num_morad, num_pessoa, grau_risco, descricao, grau_vulne} = req.body;

    try {
        const resultadoValidacao = ValidaRisco(num_rel, cooX, cooY, num_morad, num_pessoa, grau_risco, descricao, grau_vulne);
        if(resultadoValidacao) {
            res.status(200)
            res.send("Erro:" + resultadoValidacao)
        } else {
            await Risco.create({
                num_rel: num_rel,
                cooX: cooX,
                cooY: cooY,
                num_morad: num_morad,
                num_pessoa: num_pessoa,
                grau_risco: grau_risco,
                descricao: descricao,
                grau_vulne: grau_vulne
            });
        }
        res.json("Registration Successful");
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}

function ValidaRisco(num_rel, cooX, cooY, num_morad, num_pessoa, grau_risco, descricao, grau_vulne) {
    var resultado = ''
    resultado = resultado + validaPreenchido(num_rel, 'Número do Relatório')
    resultado = resultado + validaPreenchido(cooX, 'Coordenada X')
    resultado = resultado + validaPreenchido(cooY, 'Coordenada Y')
    resultado = resultado + validaPreenchido(num_morad, 'Número da moradia')
    resultado = resultado + validaPreenchido(num_pessoa, 'Número de pessoas')
    resultado = resultado + validaPreenchido(grau_risco, 'Grau de Risco')
    resultado = resultado + validaPreenchido(descricao, 'Descrição')
    resultado = resultado + validaPreenchido(grau_vulne, 'Grau de Vulnerabilidade')
    if(resultado) {
        return resultado
    }
    resultado = resultado + validaTamanho(num_rel, 'Número do Relatório', 11)
    resultado = resultado + validaInt(num_rel, 'Número do Relatório')
    resultado = resultado + validaFloat(cooX, 'Coordenada X')
    resultado = resultado + validaFloat(cooY, 'Coordenada Y')
    resultado = resultado + validaInt(num_morad, 'Número da moradia')
    resultado = resultado + validaInt(num_pessoa, 'Número de pessoas')
    return resultado
}