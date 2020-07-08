'use strict';
const db = require('../controllers/db');
var User = function (user) {
  this.user_name = user.user_name;
  this.password = user.password;
  this.role = user.role;
};
User.getAllUsers = (result) => {
  let sql = 'SELECT * FROM users';;
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
User.createUser = (newUser, result) => {
  let sql = 'INSERT INTO users SET ?';
  db.query(sql, newUser, (err, response) => {
    if (err) result(err, null);
    result(null, newUser);
  });
};
User.getDetailUser = (user_id, result) => {
  let sql = 'SELECT * FROM users WHERE user_id = ?';
  db.query(sql, user_id, (err, response) => {
    if (err) result(err, null);
    result(null, response[0]);
  });
};
User.deleteUser = (user_id, result) => {
  let sql = 'DELETE FROM users WHERE user_id = ?';
  db.query(sql, user_id, (err, response) => {
    if (err) result(err, null);
    result(null, user_id);
  });
};
User.updateUser = (user, result) => {
  let sql = 'UPDATE users SET ? WHERE user_id = ?';
  db.query(sql, [user, user.user_id], (err, response) => {
    if (err) result(err, null);
    result(null, user.user_id);
  });
};
module.exports = User;
