const mongoose = require('mongoose');

const { Schema } = mongoose;

const userData = new Schema({
  name: { type: String },
  surname: { type: String },
  country: { type: String },
  age: { type: Number },
});

module.exports = mongoose.model('Data', userData);
