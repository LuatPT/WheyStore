"use strict";
const Category = require("../models/categoryModel")
exports.get_all_categorys = (req, res) => {
  Category.getAllcategorys((err, categorys) => {
    if (err) res.send(err);
    res.send(categorys);
  })
}
exports.create_new_category = (req, res) => {
  var new_category = new Category(req.body);
  console.log(req.body)
  Category.createCategory(new_category, (err, category) => {
    if (err) res.send(err)
    res.json("category with " + category[0].category_id + " have been created");
  })
}
exports.get_detail_category = (req, res) => {
  Category.getDetailCategory(req.params.category_id, (err, category) => {
    if (err) res.send(err);
    res.send(category)
  })
}
exports.delete_category = (req, res) => {
  Category.deleteCategory(req.params.category_id, (err, category) => {
    if (err) res.send(err)
    res.json("category with " + category[0].category_id + " have been deleted")
  })
}
exports.update_category = (req, res) => {
  Category.updateCategory(req.body, (err, category) => {
    if (err) res.send(err)
    res.json("category with " + category[0].category_id + "have been updated")
  })
}