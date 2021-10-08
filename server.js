/* eslint-disable no-console */
const mongoose = require('mongoose');
const express = require('express');

const app = express;

mongoose.connect('mongodb://localhost/API-rest');
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
