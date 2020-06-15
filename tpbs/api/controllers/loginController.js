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
