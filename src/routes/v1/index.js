const express = require('express');
const router = express.Router();

const UserController= require('../../controller/user-controller');

const validateAuth= require('../../middleware/validateAuth');

router.post('/signup', validateAuth, UserController.createUser);
router.post('/signin', validateAuth, UserController.signIn);

module.exports = router;