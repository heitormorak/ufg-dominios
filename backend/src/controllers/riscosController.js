import {Risco} from '../models/riscosModel.js'
import {GetSquare} from '../helper/squareHelper.js'

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
        await Risco.create({
            num_rel: num_rel,
            cooX: cooX,
            cooY: cooY,
            num_morad: num_morad,
            nspt2: nspt2,
            num_pessoa: num_pessoa,
            grau_risco: grau_risco,
            descricao: descricao,
            grau_vulne: grau_vulne
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}