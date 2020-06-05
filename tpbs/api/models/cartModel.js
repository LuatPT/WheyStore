"use strict";
const db = require("../controllers/db");
var Cart = function (cart) {
  this.user_id = cart.user_id;
  this.product_id = cart.product_id;
  this.soluong = cart.soluong;
}
Cart.getAllCarts = result => {
  let sql = "SELECT users.user_name, products.product_name, cart.soluong, (cart.soluong*products.product_price) as tong from cart inner join products on products.product_id = cart.product_id inner join users on users.user_id = cart.user_id";
  db.query(sql, (err, response) => {
    console.log(response)
    if (err) result(err, null)
    result(null, response);
  })
}
Cart.createCart = (newCart, result) => {
  let sql = "INSERT INTO cart SET ?";
  db.query(sql, newCart, (err, response) => {
    if (err) result(err, null)
    result(null, newCart.product_id);
  })
}
Cart.getDetailCart = (cart_id, result) => {
  let sql = "SELECT users.user_name, products.product_name,  products.product_img, cart.soluong, (cart.soluong*products.product_price) as tong from cart inner join products on products.product_id = cart.product_id inner join users on users.user_id = cart.user_id where cart.user_id = ?";
  db.query(sql, cart_id, (err, response) => {
    if (err) result(err, null)
    result(null, response);
  })
}
Cart.deleteCart = (cart_id, result) => {
  let sql = "DELETE FROM cart WHERE cart_id = ?";
  db.query(sql, cart_id, (err, response) => {
    if (err) result(err, null)
    result(null, cart_id)
  })
}
Cart.updateCart = (cart, cart_id, result) => {
  let sql = "UPDATE cart SET ? WHERE cart_id = ?";
  db.query(sql, [cart, cart_id], (err, response) => {
    if (err) result(err, null)
    result(null, cart.cart_id);
  })
}
module.exports = Cart