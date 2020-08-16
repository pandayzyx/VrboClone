const sql = require("../../models");
const { QueryTypes } = require("sequelize");

const User = {};

User.getUserByMail = (email) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT * FROM users WHERE email = $email", {
        bind: {
          email: email,
        },
        type: QueryTypes.SELECT,
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

User.getUserIdByMail = (email) => {
  return new Promise(function (resolve, reject) {
    sql.sequelize
      .query("SELECT id FROM users WHERE email = $email", {
        bind: {
          email: email,
        },
        type: QueryTypes.SELECT,
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

User.createUser = (name, email, password) => {
  return new Promise(function (resolve, reject) {
    sql.users
      .create({
        name: name,
        email: email,
        password: password,
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
};

module.exports = User;
