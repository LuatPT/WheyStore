'use strict';
const Rate = require('../models/rateModel');
exports.get_rate_by_product = (req, res) => {
  Rate.getRateByProduct(req.params.product_id, (err, rates) => {
    if (err) res.send(err);
    res.send(rates);
  });
};
exports.get_avg_rate_by_product = (req, res) => {
  Rate.getAvgRateByProduct(req.params.product_id, (err, rates) => {
    if (err) res.send(err);
    res.send(rates);
  });
};
exports.create_new_rate = (req, res) => {
  var new_rate = new Rate(req.body);
  Rate.createRate(new_rate, (err, rate) => {
    if (err) res.send(err);
    res.json('Rate with have been created');
  });
};