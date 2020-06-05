"use strict";
const db = require("../controllers/db");
var LoginModel = function (login) {
  this.username = login.username;
  this.password = login.password;
}
LoginModel.authenciate = (account, result) => {
  let sql = "SELECT COUNT(1) as checkAuth, user_id FROM users WHERE user_name = ? and password = ? ";
  db.query(sql, [account.username, account.password], (err, response) => {
    if (err) result(err, null)
    // console.log(response[0].checkAuth)
    if (response[0].checkAuth == 1) {
      // console.log("AAAAAAA")
      result(null, { userId: response[0].user_id, message: true });
    } else {
      result(null, { userId: response[0].user_id, message: false });
    }
  })
}
module.exports = LoginModel;