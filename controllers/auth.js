var axios = require("axios");
var jwt = require("jsonwebtoken");

exports.login = async function (req, res, next) {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`);
}

exports.logout = function (req, res, next) {
    res.clearCookie("jwt");
    res.redirect("/");
}

exports.callback = async function (req, res, next) {
    try {
        var { data: token } = await axios({
            method: "POST",
            url: `https://github.com/login/oauth/access_token?client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}&code=${req.query.code}`,
            headers: {
                Accept: "application/json"
            }
        });

        var { data: user } = await axios({
            method: "GET",
            url: "https://api.github.com/user",
            headers: {
                Authorization: "token " + token.access_token
            }
        });

        var signedUser = jwt.sign({
            id: user.id,
            username: user.login,
            avatar_url: user.avatar_url,
        }, process.env.JWT_SECRET);
        res.cookie("jwt", signedUser);

        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.json(err);
    }
}