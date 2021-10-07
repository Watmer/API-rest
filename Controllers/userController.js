/* eslint-disable no-console */
const User = require('../Models/userModel');

exports.getUser = (req, res) => {
  User.get((err, user) => {
    if (err) res.send(400, err.message);
    res.status(200).jsonp(user);
  });
};
exports.newUser = (req, res) => {
  const userData = new User({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
  });

  userData.save((err, saveUser) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).jsonp(saveUser);
  });
};

exports.viewUser = (req, res) => {
  User.findById(req.params.userData_id, (err, viewUser) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).jsonp(viewUser);
  });
};

exports.updateUser = (req, res) => {
  User.findById(req.params.userData_id, (updateUser) => {
    User.name = req.body.name;
    User.surname = req.body.surname;
    User.email = req.body.email;
    User.age = req.body.age;
    User.gender = req.body.gender;

    updateUser.save((err) => {
      if (err) return res.status(400).send(err.message);
      return res.status(200).jsonp(updateUser);
    });
  });
};

exports.deleteUser = (req, res) => {
  User.findById(req.params.userData_id, (userData) => {
    userData.remove((err) => {
      if (err) return res.send(400, err.message);
      return res.status(200);
    });
  });
};
