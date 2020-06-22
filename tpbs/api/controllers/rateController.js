'use strict';
const Rate = require('../models/rateModel');
exports.get_rate_by_product = (req, res) => {
  Rate.getRateByProduct(req.params.product_id, (err, rates) => {
    if (err) res.send(err);
    res.send(rates);
  });
};