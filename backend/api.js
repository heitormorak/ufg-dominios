import express from 'express'
import cors from 'cors'
import dotenv from "dotenv";
import {conexao} from './src/config/db.js';
import {router} from './src/routes/index.js'

dotenv.config();

await conexao.sync();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
    console.log(`Server is running in the port: ${port}`);
})