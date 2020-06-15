'use strict';
const db = require('../controllers/db');
const jwt = require('jsonwebtoken');
require('dotenv').config();
var LoginModel = function (login) {
  this.username = login.username;
  this.password = login.password;
};
LoginModel.authenciate = (account, result) => {
  let sql =
    'SELECT COUNT(1) as checkAuth, user_id FROM users WHERE user_name = ? and password = ? ';
  db.query(sql, [account.username, account.password], (err, response) => {
    if (err) result(err, null);
    if (response[0].checkAuth == 1) {
      const payload = {
        check: true,
      };
      var token = jwt.sign(payload, process.env.secret, {
        expiresIn: 1440, // expires in 24 hours
      });
      console.log(token);
      result(null, {
        userId: response[0].user_id,
        message: true,
        jwt: token,
      });
    } else {
      result(null, { userId: response[0].user_id, message: false });
    }
  });
};
module.exports = LoginModel;
