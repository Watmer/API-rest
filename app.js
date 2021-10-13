/* eslint-disable no-console */
const express = require('express');

const app = express();
const userRoutes = require('./Routes/userRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', userRoutes);

module.exports = app;
