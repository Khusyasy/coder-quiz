var mongoose = require("mongoose");

var scoreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: String,
    difficulty: String,
    score: Number,
}, { timestamps: true } );

module.exports = mongoose.model("Score", scoreSchema);