"use strict";
const Product = require("../models/productModel")
exports.get_all_products = (req, res) => {
  Product.getAllProducts((err, products) => {
    if (err) res.send(err);
    res.send(products);
  })
}
exports.create_new_product = (req, res) => {
  var new_product = new Product(req.body);
  console.log(req.body)
  Product.createProduct(new_product, (err, product) => {
    if (err) res.send(err)
    res.json("Product with " + product.product_id + " have been created");
  })
}
exports.get_detail_product = (req, res) => {
  Product.getDetailProduct(req.params.product_id, (err, product) => {
    if (err) res.send(err);
    res.send(product)
  })
}
exports.delete_product = (req, res) => {
  Product.deleteProduct(req.params.product_id, (err, product) => {
    if (err) res.send(err)
    res.json("Product with " + product.product_id + " have been deleted")
  })
}
exports.update_product = (req, res) => {
  console.log(req.body)
  Product.updateProduct(req.body, (err, product) => {
    if (err) res.send(err)
    res.json("Product with " + product.product_id + "have been updated")
  })
}