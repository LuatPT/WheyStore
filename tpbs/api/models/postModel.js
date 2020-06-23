'use strict';
const db = require('../controllers/db');
var Post = function (postObject) {
  this.post_id = postObject.post_id;
  this.user_id = postObject.user_id;
  this.content = postObject.content
  this.create_at = new Date();
  this.update_at = new Date();
};
Post.getNewPosts = result => {
  let sql = 'SELECT * FROM posts ORDER bY create_at DESC limit 3;';
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
module.exports = Post