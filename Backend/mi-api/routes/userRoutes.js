const express = require('express');
const router = express.Router();
import userController from "../controllers/userController.js";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ message: 'List of users'});
});

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/userProfile/:id', userController.getProfile);
router.post('/userUpdate/:id', userController.updateProfile);
router.delete('/userDelete/:id', userController.deleteUser);

module.exports = router;
