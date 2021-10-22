const mongoose = require('mongoose');

const { Schema } = mongoose;

const userData = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  age: { type: Number },
  gender: { type: String },
});

module.exports = mongoose.model('User', userData);
