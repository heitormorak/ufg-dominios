import {Sequelize} from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

export const conexao = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  dialect: 'mysql'
})

conexao.authenticate().then(() => {
    console.log('conexão com o banco realizada com sucesso!')
}).catch(() => {
    console.error('Ação não realizada')
})