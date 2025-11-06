/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { connection } = require("../mysql.js");

class User {
  async getUser() {
    const [users] = await connection.query("SELECT * FROM user");
    return users;
  }
}

module.exports = { User };
