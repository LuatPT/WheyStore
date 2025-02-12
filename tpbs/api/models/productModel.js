'use strict';
const db = require('../controllers/db');
var Product = function (pro) {
  this.product_name = pro.product_name;
  this.category_id = pro.category_id;
  this.product_img = pro.product_img;
  this.product_note = pro.product_note;
  this.product_price = pro.product_price;
  this.product_sale = pro.product_sale;
  this.product_endsale = pro.product_endsale;
};
Product.getAllProducts = (param, result) => {
  let start = (param.page - 1) * param.per_page;
  let error = false;
  var rep = { list: [], total: 0 };
  let sqlCount =
    'select count(*) as total from categorys inner join products on categorys.category_id = products.category_id;';
  let sql =
    'select * from categorys inner join products on categorys.category_id = products.category_id limit ' +
    start +
    ',' +
    param.per_page;
  db.query(sqlCount, (err, response) => {
    if (err) {
      error = true;
    }
    rep.total = response[0].total;
  });
  db.query(sql, (err, response) => {
    if (err) {
      error = true;
    }
    rep.list = response;
    //Chạy nhưng k đúng lắm
    result(null, rep);
  });
};
Product.createProduct = (newProduct, result) => {

  let sql = 'INSERT INTO products SET ?';
  db.query(sql, newProduct, (err, response) => {
    if (err) result(err, null);
    result(null, newProduct);
  });
};
Product.getDetailProduct = (product_id, result) => {
  let sql = 'SELECT * FROM products WHERE product_id = ?';
  db.query(sql, product_id, (err, response) => {
    if (err) result(err, null);
    result(null, response[0]);
  });
};
Product.deleteProduct = (product_id, result) => {
  let sql = 'DELETE FROM products WHERE product_id = ?';
  db.query(sql, product_id, (err, response) => {
    if (err) result(err, null);
    result(null, product_id);
  });
};
Product.updateProduct = (product, result) => {
  let sql = 'UPDATE products SET ? WHERE product_id = ?';
  db.query(sql, [product, product.product_id], (err, response) => {
    if (err) result(err, null);
    result(null, product.product_id);
  });
};
module.exports = Product;
