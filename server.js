/* eslint-disable no-console */
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000;
const DB = process.env.MONGODB || 'mongodb://localhost:27017/API-rest';

mongoose.connect(DB, { useNewUrlParser: true }, (err) => {
  if (err) console.log(`Database unable to conect. Error: ${err}`);
  else app.listen(PORT, () => { console.log(`Node server running on http://localhost:${PORT}`); });
});
