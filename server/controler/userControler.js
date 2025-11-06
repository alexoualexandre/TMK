/* eslint-disable no-undef */

const { User } = require("../class/User.js");

const getUser = async (req, res, next) => {
  try {
    const users = await new User().getUser();
    res.json(users);
  } catch (err) {
    next({ error: `erreur:${err}` });
  }
};

module.exports = { getUser };
