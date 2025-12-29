/* eslint-disable no-undef */

const { User } = require("../class/User.js");

const getUser = async (req, res, next) => {
  const { name } = req.params;
  try {
    const users = await new User().getUser(name);
    res.json(users);
  } catch (err) {
    next({ error: `erreur:${err}` });
  }
};

const addUser = async (req, res, next) => {
  const { us } = req.body;
  try {
    const userId = await new User().addUser(us);
    res.json({number: userId});
  } catch (err) {
    next({ error: `erreur:${err}` });
  }
};

module.exports = { getUser, addUser };
