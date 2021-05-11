var axios = require("axios");

function processAnswers(answers) {
    return Object.entries(answers)
        .filter(([option, answer]) => answer !== null)
        .sort(_ => Math.random() - 0.5)
        .map(([option, answer])=>({option, answer}));
}

function processCorrectAnswers(correct_answers){
    return Object.entries(correct_answers)
        .map(([key, value]) => (value == "true" ? key.substr(0, 8) : false))
        .filter((e) => e);
}

function processQuiz({ id, question, answers, correct_answers }) {
    return {
        id,
        question,
        answers: processAnswers(answers),
        correct_answers: processCorrectAnswers(correct_answers),
    }
}

exports.random = async function (req, res, next) {
    var tag = req.query.tag || "";
    var diff = req.query.diff || "";
    await axios
        .get(`https://quizapi.io/api/v1/questions?limit=10&tags=${tag}&diffculty=${diff}`,{
            headers: {
                "X-Api-Key": process.env.QUIZAPI_KEY,
            }
        })
        .then(({ data }) => {
            res.json(data.map(processQuiz));
        });
}