import { Sequelize } from "sequelize";

const db = new Sequelize("authDB", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
