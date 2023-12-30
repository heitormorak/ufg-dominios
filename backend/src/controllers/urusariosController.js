import {Usuario} from '../models/usuarioModel.js'

export async function EnrollUsuario(req, res) {
    const {email, senha, usuario} = req.body;

    try {
        await Usuario.create({
            email: email,
            senha: senha,
            usuario: usuario
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}