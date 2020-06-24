'use strict';
const Post = require('../models/postModel');
exports.get_new_posts = (req, res) => {
  Post.getNewPosts((err, posts) => {
    if (err) res.send(err);
    res.send(posts);
  });
};
exports.get_all_posts = (req, res) => {
  Post.getAllPosts((err, posts) => {
    if (err) res.send(err);
    res.send(posts);
  });
};
exports.get_detail_post = (req, res) => {
  Post.getDetailPost(req.params.post_id, (err, postObj) => {
    if (err) res.send(err);
    res.send(postObj);
  });
};