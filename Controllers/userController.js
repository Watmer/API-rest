/* eslint-disable no-console */
const User = require('../Models/userModel');

function getUser(req, res) {
  User.find((err, user) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(user);
  });
}
function newUser(req, res) {
  const userData = new User(req.body);

  userData.save((err, saveUser) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(saveUser);
  });
}

function viewUser(req, res) {
  User.findById(req.params.userData_id, (err, seeUser) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send(seeUser);
  });
}

function updateUser(req, res) {
  User.findById(req.params.userData_id, (changeUser) => {
    changeUser.name = req.body.name;
    changeUser.surname = req.body.surname;
    changeUser.email = req.body.email;
    changeUser.age = req.body.age;
    changeUser.gender = req.body.gender;

    changeUser.save((err) => {
      if (err) return res.status(400).send(err.message);
      return res.status(200).send(changeUser);
    });
  });
}

function deleteUser(req, res) {
  User.findById(req.params.userData_id, (userData) => {
    userData.remove((err) => {
      if (err) return res.send(400, err.message);
      return res.status(200);
    });
  });
}
module.exports = {
  getUser,
  newUser,
  viewUser,
  updateUser,
  deleteUser,
};
