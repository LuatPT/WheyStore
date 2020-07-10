'use strict';
const Trainer = require('../models/trainerModel');

exports.get_all_trainer = (req, res) => {
  Trainer.getAllTrainer((err, trainers) => {
    if (err) res.send(err);
    res.send(trainers);
  });
};
exports.get_detail_trainer = (req, res) => {
  Trainer.getDetailTrainer(req.params.trainer_id, (err, trainerObj) => {
    if (err) res.send(err);
    res.send(trainerObj);
  });
};
exports.delete_trainer = (req, res) => {
  Trainer.deleteTrainer(req.params.trainer_id, (err, trainerObj) => {
    if (err) res.send(err);
    res.send({ message: 'Trainer have been deleted!' });
  });
};
exports.update_trainer = (req, res) => {
  Trainer.updateTrainer(req.body, (err, trainerObj) => {
    if (err) res.send(err);
    res.send({ message: 'Trainer have been updated!' });
  });
};
exports.create_new_trainer = (req, res) => {
  Trainer.createTrainer(req.body, (err, trainerObj) => {
    if (err) res.send(err);
    res.send({ message: 'Trainer have been created!' });
  });
};