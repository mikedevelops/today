const express = require('express');
const passport = require('passport');
const controller = require('../controllers/authenticationController');

const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/logout', controller.logout);

module.exports = router;
