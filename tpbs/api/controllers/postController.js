'use strict';
const Post = require('../models/postModel');
exports.get_new_posts = (req, res) => {
  Post.getNewPosts((err, posts) => {
    if (err) res.send(err);
    res.send(posts);
  });
};
exports.get_all_posts = (req, res) => {
  Post.getAllPosts((err, post) => {
    if (err) res.send(err);
    res.send(post);
  });
};
exports.get_detail_post = (req, res) => {
  Post.getDetailPost(req.params.post_id, (err, postObj) => {
    if (err) res.send(err);
    res.send(postObj);
  });
};
exports.delete_post = (req, res) => {
  Post.deletePost(req.params.post_id, (err, postObj) => {
    if (err) res.send(err);
    res.send({ message: 'Post have been deleted!' });
  });
};
exports.update_post = (req, res) => {
  Post.updatePost(req.body, (err, postObj) => {
    if (err) res.send(err);
    res.send({ message: 'Post have been updated!' });
  });
};
exports.create_new_post = (req, res) => {
  Post.createPost(req.body, (err, postObj) => {
    if (err) res.send(err);
    res.send({ message: 'Post have been created!' });
  });
};