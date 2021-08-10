import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";
import NotesModel from "./notes.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  operatorsAliases: "0",
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {
  sequelize,
  notes: NotesModel(sequelize),
};

export default db;
