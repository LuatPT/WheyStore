'use strict';
const User = require('../models/userModel');
exports.get_all_users = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) res.send(err);
    res.send(users);
  });
};
exports.create_new_user = (req, res) => {
  var new_user = new User(req.body);
  User.createUser(new_user, (err, user) => {
    if (err) res.send(err);
    res.json('user have been created');
  });
};
exports.get_detail_user = (req, res) => {
  User.getDetailUser(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    res.send(user);
  });
};
exports.delete_user = (req, res) => {
  User.deleteUser(req.params.user_id, (err, user) => {
    if (err) res.send(err);
    res.json('user have been deleted');
  });
};
exports.update_user = (req, res) => {
  User.updateUser(req.body, (err, user) => {
    if (err) res.send(err);
    res.json('user have been updated');
  });
};
