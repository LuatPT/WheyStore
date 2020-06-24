'use strict';
const db = require('../controllers/db');
var Post = function (postObject) {
  this.post_id = postObject.post_id;
  this.user_id = postObject.user_id;
  this.content = postObject.content
  this.create_at = new Date();
  this.update_at = new Date();
  this.header = postObject.header;
  this.thumb_nail = postObject.thumb_nail;
  this.post_cate_id = postObject.post_cate_id;
};
Post.getNewPosts = result => {
  let sql = 'SELECT * FROM posts ORDER BY create_at DESC limit 3;';
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
Post.getAllPosts = result => {
  let sql = 'SELECT * FROM posts ORDER BY create_at DESC;';
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
Post.getDetailPost = (post_id, result) => {
  let sql = 'SELECT * FROM posts WHERE post_id = ?';
  db.query(sql, post_id, (err, response) => {
    if (err) result(err, null);
    result(null, response[0]);
  });
};
module.exports = Post