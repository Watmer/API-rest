/* eslint-disable array-callback-return */
/* eslint-disable func-names */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const Data = mongoose.model('Data');

exports.findAllData = function (req, res) {
  Data.find((err, userData) => {
    if (err) res.send(500, err.message);

    console.log('GET /userData');
    res.status(200).jsonp(userData);
  });
};
exports.addData = function (req, res) {
  console.log('POST');
  console.log(req.body);

  const userData = new Data({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
  });

  userData.save((err, userData) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(userData);
  });
};
