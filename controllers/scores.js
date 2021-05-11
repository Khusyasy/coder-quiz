var mongoose = require("mongoose");
var Score = require("../models/score");
var jwt = require("jsonwebtoken");

exports.getByTagAndDiff = async function (req, res, next) {
    var tag = req.query.tag || "Random";
    var diff = req.query.diff || "Random";
    var score = await Score.find({ category: tag, difficulty: diff })
        .sort({ "score": -1 })
        .limit(10);
    score = score.map((e, i) => ({ rank: ++i, ...e._doc }));
    res.json(score);
}

exports.setScore = async function (req, res, next) {
    try {
        var tag = req.params.tag;
        var diff = req.params.diff;
        var user = {};
        if (req.cookies.jwt) {
            var { id, username, avatar_url } = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
            user = {
                id,
                username,
                avatar_url,
            }
        } else {
            throw "missing JWT";
        }

        var score = await Score.findOne({
            "user.id": user.id
        });

        if (score) {
            score.score = Math.max(score.score, req.body.score);
        } else {
            var score = new Score({
                _id: mongoose.Types.ObjectId(),
                user: user,
                category: tag,
                difficulty: diff,
                score: req.body.score
            });
        }

        await score.save();
        res.json(score);
    } catch (err) {
        console.log(err);
        res.json({ err });
    }
}