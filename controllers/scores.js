const mongoose = require("mongoose");
const Score = require("../models/score");

exports.getByTagAndDiff = async function (req, res, next) {
    var tag = req.query.tag || "";
    var diff = req.query.diff || "";
    var score = await Score.find({ category: tag, difficulty: diff });
    res.json(score);
}

exports.setScore = async function (req, res, next) {
    var tag = req.params.tag;
    var diff = req.params.diff;
    var score = new Score({
        _id: mongoose.Types.ObjectId(),
        category: tag,
        difficulty: diff,
        score: 1000,
    });
    try {
        await score.save();
        res.json(score);
    } catch (err) {
        res.json(err);
    }
}