import {Router} from "express";
import {EnrollAmostra, GetAmostras} from '../controllers/amostrasController.js';
import {EnrollRisco, GetRiscos} from '../controllers/riscosController.js';
import {EnrollUsuario, isAuthenticatedRequest, Login} from '../controllers/usuariosController.js';

const router = Router();

router.get('/amostras', GetAmostras);
router.post('/amostras', EnrollAmostra);
router.get('/riscos', GetRiscos);
router.post('/riscos', EnrollRisco);
router.post('/usuarios', EnrollUsuario);
router.post('/login', Login);
router.post('/isauthenticated', isAuthenticatedRequest)


export {router};