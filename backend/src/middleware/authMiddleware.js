import jwt from 'jsonwebtoken';
import { Usuario } from '../models/usuarioModel.js'; 

export async function isAuthenticated(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await Usuario.findByPk(decoded.userId);
        return user != null;
    } catch (error) {
        return false;
    }
}

export function authMiddleware(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    isAuthenticated(token).then(isAuth => {
        if (isAuth) {
            next();
        } else {
            res.status(401).json({ msg: "Usuário não autenticado" });
        }
    });
}
