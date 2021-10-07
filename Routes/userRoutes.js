const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();
router.route('/user')
  .get(userController.getUser)
  .post(userController.newUser);

router.route('/user/:userData_id')
  .get(userController.viewUser)
  .patch(userController.updateUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
