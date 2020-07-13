'use strict';
const db = require('../controllers/db');
var Trainer = function (trainerObj) {
  this.trainer_id = trainerObj.trainer_id;
  this.trainer_name = trainerObj.trainer_name;
  this.experience = trainerObj.experience;
  this.trainer_avatar = trainerObj.trainer_avatar;
  this.trainer_quote = trainerObj.trainer_quote;
  this.trainer_cost = trainerObj.trainer_cost;
};
Trainer.getAllTrainer = result => {
  let sql = 'SELECT * FROM trainers';
  db.query(sql, (err, response) => {
    if (err) result(err, null);
    result(null, response);
  });
};
Trainer.getDetailTrainer = (trainer_id, result) => {
  let sql = 'SELECT * FROM trainers WHERE trainer_id = ?';
  db.query(sql, trainer_id, (err, response) => {
    if (err) result(err, null);
    result(null, response[0]);
  });
};
Trainer.deleteTrainer = (trainer_id, result) => {
  let sql = 'DELETE FROM trainers WHERE trainer_id = ?';
  db.query(sql, trainer_id, (err, response) => {
    if (err) result(err, null);
    result(null, trainer_id);
  });
};
Trainer.updateTrainer = (trainer, result) => {
  let sql = 'UPDATE trainers SET ? WHERE trainer_id = ?';
  db.query(sql, [trainer, trainer.trainer_id], (err, response) => {
    if (err) result(err, null);
    result(null, trainer.trainer_id);
  });
};
Trainer.createTrainer = (newTrainer, result) => {
  let sql = 'INSERT INTO trainers SET ?';
  db.query(sql, newTrainer, (err, response) => {
    if (err) result(err, null);
    result(null, newTrainer.trainer_id);
  });
};

module.exports = Trainer