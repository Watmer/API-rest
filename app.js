/* eslint-disable no-console */
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./Routes/userRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost/API-rest');
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', userRoutes);
app.listen(8080, () => {
  console.log('Running on http://localhost:8080');
});
module.exports = app;
