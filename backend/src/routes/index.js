import {Router} from "express";
import {EnrollAmostra, GetAmostras, GetAmostraByNumRel} from '../controllers/amostrasController.js';
import {EnrollRisco, GetRiscos} from '../controllers/riscosController.js';
import {EnrollUsuario, Login} from '../controllers/usuariosController.js';
import { authMiddleware } from '../middleware/authMiddleware.js'; 

const router = Router();

router.get('/amostras', GetAmostras);
router.post('/searchamostras/', GetAmostraByNumRel);
router.post('/amostras', authMiddleware, EnrollAmostra);
router.get('/riscos', GetRiscos);
router.post('/riscos', authMiddleware, EnrollRisco);
router.post('/usuarios', EnrollUsuario);
router.post('/login', Login);


export {router};