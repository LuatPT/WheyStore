"use strict";
const db = require("../controllers/db");
var Category = function (cate) {
  this.category_id = cate.category_id;
  this.category_name = cate.category_name;
  this.category_status = cate.category_status;
}
Category.getAllcategorys = result => {
  let sql = "SELECT * FROM categorys";
  db.query(sql, (err, response) => {
    if (err) result(err, null)
    result(null, response);
  })
}
Category.createCategory = (newCategory, result) => {
  let sql = "INSERT INTO categorys SET ?";
  db.query(sql, newCategory, (err, response) => {
    if (err) result(err, null)
    result(null, newCategory.category_id);
  })
}
Category.getDetailCategory = (category_id, result) => {
  let sql = "SELECT * FROM categorys WHERE category_id = ?";
  db.query(sql, category_id, (err, response) => {
    if (err) result(err, null)
    result(null, response);
  })
}
Category.deleteCategory = (category_id, result) => {
  let sql = "DELETE FROM categorys WHERE category_id = ?";
  db.query(sql, category_id, (err, response) => {
    if (err) result(err, null)
    result(null, category_id)
  })
}
Category.updateCategory = (category, result) => {
  let sql = "UPDATE categorys SET ? WHERE category_id = ?";
  db.query(sql, [category, category.category_id], (err, response) => {
    if (err) result(err, null)
    result(null, category.category_id);
  })

}
module.exports = Category;