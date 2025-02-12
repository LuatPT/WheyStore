'use strict';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const Cart = require('../models/cartModel');

exports.get_all_carts = (req, res) => {
  var token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.send({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        Cart.getAllCarts((err, carts) => {
          if (err) res.send(err);
          res.send(carts);
        });
      }
    });
  } else {
    res.send({
      message: 'No token provided.',
    });
  }
};

exports.create_new_cart = (req, res) => {
  var new_cart = new Cart(req.body);
  var token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.json({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        Cart.createCart(new_cart, (err, cart) => {
          if (err) res.send(err);
          res.json('Cart with have been created');
        });
      }
    });
  } else {
    res.send({
      message: 'No token provided.',
    });
  }
};

exports.get_detail_cart = (req, res) => {
  Cart.getDetailCart(req.params.cart_id, (err, cart) => {
    if (err) res.send(err);
    res.send(cart);
  });
};
exports.get_detail_cart_by_userId = (req, res) => {
  var token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.json({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        Cart.getDetailCartByUserId(req.params.user_id, (err, cart) => {
          if (err) res.send(err);
          res.send(cart);
        });
      }
    });
  } else {
    res.send({
      message: 'No token provided.',
    });
  }
};

exports.delete_cart = (req, res) => {
  var token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.json({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        Cart.deleteCart(req.params.cart_id, (err, cart) => {
          if (err) res.send(err);
          res.json('Đã xóa khỏi giỏ hàng!');
        });
      }
    });
  } else {
    res.send({
      message: 'No token provided.',
    });
  }
};
exports.update_cart = (req, res) => {
  var token = req.headers['access-token'];
  if (token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if (err) {
        return res.json({ message: 'invalid token' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        Cart.updateCart(req.body, req.params.cart_id, (err, cart) => {
          if (err) res.send(err);
          res.json('Cập nhật giỏ hàng thành công!');
        });
      }
    });
  } else {
    res.send({
      message: 'No token provided.',
    });
  }
};
exports.check_exist_product = (req, res) => {
  Cart.checkExistProduct(req.params.product_id, (err, check) => {
    if (err) res.send(err);
    res.send(check);
  });
};
