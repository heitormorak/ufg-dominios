import {Usuario} from '../models/usuarioModel.js'
import bcrypt from "bcrypt";

export async function EnrollUsuario(req, res) {
    const {email, senha, usuario} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const senhaHash = await bcrypt.hash(senha, salt);

        await Usuario.create({
            email: email,
            senha: senhaHash,
            usuario: usuario
        });
        res.json({msg: "Registration Successful"});
    } catch (error) {
        res.status(400)
        res.send({msg: "Erro 400", error})
        console.log(error);
    }
}

export async function Login (req, res) {
    try{
        const user = await Usuario.findAll({
            where:{
                usuario: req.body.username
            }
        });

        if(user.length < 1){
            res.status(400).json({msg:"Usuário não encontrado"});
        }

        else {
            const match = await bcrypt.compare(req.body.password, user[0]?.senha);
        
            if(!match){            
                return res.status(400).json({
                    msg: "Usuario ou senha incorreta"                
                });
            }
            
            res.status(200).json({msg: "Login Successful"});        
        }

    }catch (error){
        console.log(error)
        res.status(404).json({msg: error});
    }
}
