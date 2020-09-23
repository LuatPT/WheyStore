'use strict';
const db = require('../controllers/db');
var Voucher = function (voucher) {
  this.voucher_id = voucher.voucher_id;
  this.voucher_percent = voucher.voucher_percent;
  this.voucher_expire = voucher.voucher_expire;
  this.voucher_code = voucher.voucher_code;
};

Voucher.checkVoucher = (voucherCode, result) => {
  let sql = 'SELECT * FROM vouchers WHERE voucher_code = ?';
  db.query(sql, voucherCode, (err, response) => {
    if (err) result(404, null);
    result(null, response[0]);
  });
};
module.exports = Voucher;
