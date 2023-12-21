import {Sequelize} from "sequelize";
import {conexao} from "../config/db.js";

export const Usuario = conexao.define('usuario', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        senha: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        usuario: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false
    });

Usuario.sync();

