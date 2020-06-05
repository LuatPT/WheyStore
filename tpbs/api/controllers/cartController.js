"use strict";
const Cart = require("../models/cartModel")
exports.get_all_carts = (req, res) => {
  Cart.getAllCarts((err, carts) => {
    if (err) res.send(err);
    res.send(carts);
  })
}
exports.create_new_cart = (req, res) => {
  var new_cart = new Cart(req.body);
  console.log(req.body)
  Cart.createCart(new_cart, (err, cart) => {
    if (err) res.send(err)
    res.json("Cart with have been created");
  })
}
exports.get_detail_cart = (req, res) => {
  Cart.getDetailCart(req.params.cart_id, (err, cart) => {
    if (err) res.send(err);
    res.send(cart)
  })
}

exports.delete_cart = (req, res) => {
  Cart.deleteCart(req.params.cart_id, (err, cart) => {
    if (err) res.send(err)
    res.json("category with have been deleted")
  })
}
exports.update_cart = (req, res) => {
  console.log(req.body)
  Cart.updateCart(req.body, req.params.cart_id, (err, cart) => {
    if (err) res.send(err)
    res.json("category with have been updated")
  })
}
