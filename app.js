const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(router);
app.listen(3000, () => {
  console.log('http://localhost:3000');
});
