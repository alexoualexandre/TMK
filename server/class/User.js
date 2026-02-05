/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { connection } = require("../mysql.js");

class User {
  async getUser(name) {
    const [users] = await connection.query(
      "SELECT * FROM users WHERE joueur1 = ?",
      [name],
    );
    return users;
  }

  async addUser(us) {
    const [user] = await connection.query(
      "INSERT INTO users (joueur1,joueur2) VALUES (?,?)",
      [us, ""],
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
      [id],
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

  async updateScoreJ1(score, id) {
    await connection.query("UPDATE users SET scorej1 = ? WHERE id = ?", [
      parseInt(score, 10),
      parseInt(id, 10),
    ]);

    await connection.query("UPDATE users SET compteur = 1 WHERE id = ?", [
      parseInt(id, 10),
    ]);

    await connection.query(
      "UPDATE users SET p1 = '',p2 = '',p3 = '',p4 = '',p5 = '',p6 = '',p7 = '',p8 = '',p9 = '',p10 = '',p11 = '',p12 = '',p13 = '',p14 = '',p15 = '',p16 = '',p17 = '',p18 = '',p19 = '',p20 = '',p21 = '',p22 = '',p23 = '',p24 = '',p25 = '',p26 = '',p27 = '',p28 = '',p29 = '',p30 = '',p31 = '',p32 = '',p33 = '',p34 = '',p35 = '',p36 = '',p37 = '',p38 = '',p39 = '',p40 = '',p41 = '',p42 = '' WHERE id = ?",
      [id],
    );
  }

  async updateScoreJ2(score, id) {
    await connection.query("UPDATE users SET scorej2 = ? WHERE id = ?", [
      parseInt(score, 10),
      parseInt(id, 10),
    ]);

    await connection.query("UPDATE users SET compteur = 1 WHERE id = ?", [
      parseInt(id, 10),
    ]);

    await connection.query(
      "UPDATE users SET p1 = '',p2 = '',p3 = '',p4 = '',p5 = '',p6 = '',p7 = '',p8 = '',p9 = '',p10 = '',p11 = '',p12 = '',p13 = '',p14 = '',p15 = '',p16 = '',p17 = '',p18 = '',p19 = '',p20 = '',p21 = '',p22 = '',p23 = '',p24 = '',p25 = '',p26 = '',p27 = '',p28 = '',p29 = '',p30 = '',p31 = '',p32 = '',p33 = '',p34 = '',p35 = '',p36 = '',p37 = '',p38 = '',p39 = '',p40 = '',p41 = '',p42 = '' WHERE id = ?",
      [id],
    );
  }
}

module.exports = { User };
