require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/dist')));

require("./database/config");

var quizRouter = require("./routes/quiz")
var scoresRouter = require("./routes/scores")

app.use("/api/quiz", quizRouter);
app.use("/api/scores", scoresRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

module.exports = app;
