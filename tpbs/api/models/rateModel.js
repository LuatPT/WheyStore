'use strict';
const db = require('../controllers/db');
var Rate = function (rateObject) {
  this.rate_id = rateObject.rate_id;
  this.user_id = rateObject.user_id;
  this.product_id = rateObject.product_id
  this.rate = rateObject.rate;
  this.comment = rateObject.comment;
  this.image = rateObject.image;
  this.create_at = new Date();
};
Rate.getRateByProduct = (product_id, result) => {
  let sql = 'SELECT * FROM rates WHERE product_id = ?';
  db.query(sql, product_id, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
Rate.createRate = (newRate, result) => {
  let sql = 'INSERT INTO rates SET ?';
  db.query(sql, newRate, (err, response) => {
    if (err) result(err, null);
    result(null, newRate.rate_id);
  });
};
module.exports = Rate;