'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Voucher = require('../models/voucherModel');
exports.check_voucher = (req, res) => {
  Voucher.checkVoucher(req.params.voucher_code, (err, voucher) => {
    if (err) res.send(err);
    res.send(voucher);
  });
};
exports.get_all_vouchers = (req, res) => {
  Voucher.getAllVouchers((err, vouchers) => {
    if (err) res.send(err);
    res.send(vouchers);
  });
};