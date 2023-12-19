import {Amostra} from '../models/amostrasModel.js'
import {GetSquare} from '../helper/squareHelper.js'


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
    const {num_rel, cooX, cooY, nspt1, nspt2, num_amostra} = req.body;

    try {

        await Amostra.create({
            num_rel: num_rel,
            cooX: cooX,
            cooY: cooY,
            nspt1: nspt1,
            nspt2: nspt2,
            num_amostra: num_amostra
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}