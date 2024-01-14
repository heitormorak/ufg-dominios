import {Usuario} from '../models/usuarioModel.js'
import bcrypt from "bcrypt";
import {validaEmail, validaPreenchido} from "../helper/validacaoHelper.js";

export async function EnrollUsuario(req, res) {
    const {email, senha, usuario} = req.body;

    try {
        const resultadoValidacao = ValidaUsuario(email, senha, usuario);
        if (resultadoValidacao) {
            res.status(200)
            res.send("Erro:" + resultadoValidacao)
        } else {
            const salt = await bcrypt.genSalt(10);
            const senhaHash = await bcrypt.hash(senha, salt);

            await Usuario.create({
                email: email,
                senha: senhaHash,
                usuario: usuario
            });
            res.json("Registration Successful");

        }
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}

export async function Login(req, res) {
    try {
        const user = await Usuario.findAll({
            where: {
                usuario: req.body.username
            }
        });

        if (user.length < 1) {
            res.status(400).json({msg: "Usuário não encontrado"});
        } else {
            const match = await bcrypt.compare(req.body.password, user[0]?.senha);

            if (!match) {
                return res.status(400).json({
                    msg: "Usuario ou senha incorreta"
                });
            }
            const hash = user[0]?.senha.toString() + req.body.username.toString();
            res.status(200).json({msg: hash});
        }

    } catch (error) {
        console.log(error)
        res.status(404).json({msg: error});
    }
}

export async function isAuthenticated(token, res) {
    const users = await Usuario.findAll();
    var usuarioExiste = false;
    for (let i = 0; i < users.length; i++) {
        const hash = users[i].senha.toString() + users[i].usuario.toString()
        if (hash == token) {
            usuarioExiste = true
        }
    }
    if (!usuarioExiste) {
        res.status(404).json({msg: "Usuário não autenticado"});
    }
    return usuarioExiste
}

export async function isAuthenticatedRequest(req, res) {
    const {token} = req.body
    if(isAuthenticated(token, res)) {
        res.status(200).json({msg: "Usuario autenticado"})
    }
}

function ValidaUsuario(email, senha, usuario) {
    var resultado = ''
    resultado = resultado + validaPreenchido(email, 'Email')
    resultado = resultado + validaPreenchido(senha, 'Senha')
    resultado = resultado + validaPreenchido(usuario, 'Usuário')
    if (resultado) {
        return resultado
    }
    resultado = resultado + validaEmail(email, 'Email')
    return resultado
}
