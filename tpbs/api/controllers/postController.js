'use strict';
const Post = require('../models/postModel');
exports.get_new_posts = (req, res) => {
  Post.getNewPosts((err, posts) => {
    if (err) res.send(err);
    res.send(posts);
  });
};