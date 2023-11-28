const Sequelizer = require("sequelize");

const sequelizer = new Sequelizer("node-complete", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelizer;
