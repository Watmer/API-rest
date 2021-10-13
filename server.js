/* eslint-disable no-console */
const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb://localhost/API-rest');
app.listen(8080, () => {
  console.log('http://localhost:8080');
});
