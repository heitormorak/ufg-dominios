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

export async function Login (req, res) {
    try{
        const user = await Usuario.findAll({
            where:{
                usuario: req.body.username
            }
        });

        const match = await bcrypt.compare(req.body.password, user[0].password);
        
        if(!match){            
            return res.status(400).json({
                msg: "Usuario ou senha incorreta"                
            });
        }
        
        res.status(200).json({msg: "Login Successful"});              

    }catch (error){
        res.status(404).json({msg:"Usuario não encontrado"});
    }
}
