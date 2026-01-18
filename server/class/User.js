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

  async updateInvitation(us, id) {
    await connection.query("UPDATE users SET joueur2 = ? WHERE id = ?", [
      us,
      id,
    ]);
    return id;
  }

  async getData(id) {
    const [getData] = await connection.query(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );
    return getData;
  }

  async updatePosition(inpt, id, nex, compteur, p, request) {
    await connection.query("UPDATE users SET radio_position = ? WHERE id = ?", [
      inpt,
      id,
    ]);
    await connection.query("UPDATE users SET compteur = ? WHERE id = ?", [
      compteur,
      id,
    ]);
    await connection.query("UPDATE users SET next = ? WHERE id = ?", [nex, id]);
    await connection.query(request, [p, id]);
  }
}

module.exports = { User };
