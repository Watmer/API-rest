const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();
router.get('/user', userController.getUser);
router.post('/new', userController.newUser);
router.get('/find:id', userController.viewUser);
router.patch('/update:id', userController.updateUser);
router.put('/update', userController.updateUser);
router.delete('/delete', userController.deleteUser);

module.exports = router;
