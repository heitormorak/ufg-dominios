import {Router} from "express";
import {EnrollAmostra, GetAmostras} from '../controllers/amostrasController.js';
import {EnrollRisco, GetRiscos} from '../controllers/riscosController.js';

const router = Router();

router.get('/amostras', GetAmostras);
router.post('/amostras', EnrollAmostra);
router.get('/riscos', GetRiscos);
router.post('/riscos', EnrollRisco);

export {router};