/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { connection } = require("../mysql.js");

class User {
  async getUser(name) {
    const [users] = await connection.query(
      "SELECT * FROM users WHERE joueur1 = ?",
      [name]
    );
    return users;
  }

  async addUser(us) {
    const [user] = await connection.query(
      "INSERT INTO users (joueur1,joueur2) VALUES (?,?)",
      [us, ""]
    );
    return user.insertId;
  }
}

module.exports = { User };
