const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();
router.route('/User')
  .get(userController.getUser)
  .post(userController.newUser);

router.route('/userController/:id')
  .get(userController.viewUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
