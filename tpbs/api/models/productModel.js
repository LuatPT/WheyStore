"use strict";
const db = require("../controllers/db");
var Product = function (pro) {
  this.product_id = pro.product_id;
  this.product_name = pro.product_name;
  this.category_id = pro.category_id;
  this.product_img = pro.product_img;
  this.product_note = pro.product_note;
  this.product_price = pro.product_price;
  this.product_sale = pro.product_sale;
  this.product_endsale = pro.product_endsale;
}
Product.getAllProducts = result => {
  let sql = "SELECT * FROM products";
  db.query(sql, (err, response) => {
    if (err) result(err, null)
    result(null, response);
  })
}
Product.createProduct = (newProduct, result) => {
  let sql = "INSERT INTO products SET ?";
  db.query(sql, newProduct, (err, response) => {
    if (err) result(err, null)
    result(null, newProduct.product_id);
  })
}
Product.getDetailProduct = (product_id, result) => {
  console.log(product_id);
  let sql = "SELECT * FROM products WHERE product_id = ?";
  db.query(sql, product_id, (err, response) => {
    if (err) result(err, null)
    result(null, response);
  })
}
Product.deleteProduct = (product_id, result) => {
  let sql = "DELETE FROM products WHERE product_id = ?";
  db.query(sql, product_id, (err, response) => {
    if (err) result(err, null)
    result(null, product_id)
  })
}
Product.updateProduct = (product, result) => {
  let sql = "UPDATE products SET ? WHERE product_id = ?";
  db.query(sql, [product, product.product_id], (err, response) => {
    if (err) result(err, null)
    result(null, product.product_id);
  })

}
module.exports = Product;