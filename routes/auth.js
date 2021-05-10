var express = require('express');
var router = express.Router();

var auth = require('../controllers/auth');

router.get('/login', auth.login);
router.get('/login/callback', auth.callback);

router.get('/logout', auth.logout);

module.exports = router;
