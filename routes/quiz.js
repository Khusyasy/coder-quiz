var express = require('express');
var router = express.Router();

var quiz = require('../controllers/quiz');

router.get('/', quiz.random);

module.exports = router;
