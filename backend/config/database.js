import { Sequelize } from "sequelize";

const db = new Sequelize("authDB", "root", "", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
});

export default db;
