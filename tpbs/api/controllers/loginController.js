'use strict';
const LoginModel = require('../models/loginModel');
exports.login_account = (req, res) => {
  var username = req.body.uid;
  var password = req.body.pwd;
  LoginModel.authenciate({ username, password }, (err, exist) => {
    if (err) res.send(err);
    res.json(exist);
  });
};
exports.register_account = (req, res) => {
  var newAccout = {
    user_name: req.body.userName,
    password: req.body.passWord,
    role: 1
  }
  LoginModel.register(newAccout, (err, message) => {
    if (err) res.send(err);
    res.json(message);
  });
};
