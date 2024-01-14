import {Amostra} from '../models/amostrasModel.js'
import {GetSquare} from '../helper/squareHelper.js'
import {validaFloat, validaInt, validaPreenchido, validaTamanho} from "../helper/validacaoHelper.js";
import {isAuthenticated} from "./usuariosController.js";


export async function GetAmostras(req, res) {
    try {
        const amostras = await Amostra.findAll({
            attributes: ['coox', 'cooy', 'nspt12', 'nspt23', 'num_amostra']
        });

        const polygonDataArray = amostras.map((amostra) => {
            let profundidade = amostra.dataValues.num_amostra + 1;
            let penetravel = false;
            let golpes = 0;

            if (amostra.dataValues.nspt23 === null) {
                golpes = amostra.dataValues.nspt12;
            } else {
                golpes = amostra.dataValues.nspt23;
            }

            golpes < 50 ? penetravel = true : penetravel = false;


            const x = amostra.dataValues.coox
            const y = amostra.dataValues.cooy
            let square = GetSquare(x, y);
            return {

                type: "Feature",
                properties: {
                    name: `Polygon ${amostra.id}`,
                    index: profundidade,
                    penetravel,
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

export async function EnrollAmostra(req, res) {
    const {num_rel, cooX, cooY, nspt1, nspt2, num_amostra, token} = req.body;
    try {
        console.log("bbbb")
        var autenticado = await isAuthenticated(token, res);
        if (!autenticado) {
            res.status(404).json({msg: "Usuário não autenticado"});
            return
        }
        const resultadoValidacao = ValidaAmostra(num_rel, cooX, cooY, nspt1, nspt2, num_amostra);
        if (resultadoValidacao) {
            res.status(200)
            res.send("Erro:" + resultadoValidacao)
        } else {
            await Amostra.create({
                num_rel: num_rel,
                cooX: cooX,
                cooY: cooY,
                nspt1: nspt1,
                nspt2: nspt2,
                num_amostra: num_amostra
            });
            res.json("Registration Successful");
        }
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}

function ValidaAmostra(num_rel, cooX, cooY, nspt1, nspt2, num_amostra) {
    var resultado = ''
    resultado = resultado + validaPreenchido(num_rel, 'Número do Relatório')
    resultado = resultado + validaPreenchido(cooX, 'Coordenada X')
    resultado = resultado + validaPreenchido(cooY, 'Coordenada Y')
    resultado = resultado + validaPreenchido(num_amostra, 'Número de Amostras')
    if (resultado) {
        return resultado
    }
    resultado = resultado + validaTamanho(num_rel, 'Número do Relatório', 11)
    resultado = resultado + validaInt(num_rel, 'Número do Relatório')
    resultado = resultado + validaFloat(cooX, 'Coordenada X')
    resultado = resultado + validaFloat(cooY, 'Coordenada Y')
    resultado = resultado + validaInt(nspt1, 'Nspt 1o+2o - última amostra')
    resultado = resultado + validaInt(nspt2, 'Nspt 2o+3o - última amostra')
    resultado = resultado + validaInt(num_amostra, 'Número de Amostras')
    return resultado
}