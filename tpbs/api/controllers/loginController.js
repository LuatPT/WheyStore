"use strict";
const LoginModel = require("../models/loginModel")
exports.login_account = (req, res) => {
  var username = req.body.uid;
  var password = req.body.pwd;
  console.log(req.body)
  LoginModel.authenciate({ username, password }, (err, exist) => {
    if (err) res.send(err);
    console.log(exist)
    // if (exist) res.json({ message: exist })
    res.json(exist);
  })
}