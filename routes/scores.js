var express = require('express');
var router = express.Router();

var scores = require('../controllers/scores');

router.get('/', scores.getByTagAndDiff);
router.post('/:tag/:diff', scores.setScore);

module.exports = router;
