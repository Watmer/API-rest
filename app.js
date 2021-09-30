/* eslint-disable no-console */
const express = require('express');

const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(router);
mongoose.connect('mongodb://localhost/userData');
app.listen(3000, () => {
  console.log('http://localhost:3000');
});
