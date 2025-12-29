/* eslint-disable no-undef */
const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "alexandre",
  password: "michiels",
  database: "puissance4",
});

// eslint-disable-next-line no-undef
module.exports = { connection };