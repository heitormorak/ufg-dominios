import { Sequelize } from "sequelize";
import { conexao } from "../config/db.js";

export const Risco = conexao.define('risco', {
    num_rel: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },

    cooX: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    cooY: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },

    num_morad: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    num_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    grau_risco: {
        type: Sequelize.STRING,
        allowNull: false,
    },    

    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    grau_vulne: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
},
{
    timestamps: false
});

Risco.sync();

