var mongoose = require("mongoose");

var scoreSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: Object,
    category: String,
    difficulty: String,
    score: Number,
}, { timestamps: true } );

module.exports = mongoose.model("Score", scoreSchema);