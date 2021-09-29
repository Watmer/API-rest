/* eslint-disable no-console */
const mongoose = require('mongoose');

const Data = mongoose.model('Data');

exports.findAllData = function request(req, res) {
  Data.find((err, userModel) => {
    if (err) res.send(500, err.message);

    console.log('GET /userModel');
    res.status(200).jsonp(userModel);
  });
};
