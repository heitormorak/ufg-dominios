import {Router} from "express";
import {EnrollAmostra, GetAmostras} from '../controllers/amostrasController.js';
import {EnrollRisco, GetRiscos} from '../controllers/riscosController.js';
import {EnrollUsuario} from '../controllers/urusariosController.js';

const router = Router();

router.get('/amostras', GetAmostras);
router.post('/amostras', EnrollAmostra);
router.get('/riscos', GetRiscos);
router.post('/riscos', EnrollRisco);
router.post('/usuarios', EnrollUsuario);

export {router};