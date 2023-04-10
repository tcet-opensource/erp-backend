const { genrateToken } = require("../util");
const user = require("../models/user");

exports.login = async function (req, res, next) {
  const { id, password } = req.body;
  let userValidated = await user.validateUser(id, password);
  if (userValidated) {
    userDetails = {
      uid: userValidated.uid,
      name: userValidated.name,
      emailId: userValidated.emailId,
      type: userValidated.userType,
    };
    let token = genrateToken(userDetails);
    userDetails["token"] = token;
    res.send({ res: "welcome", user: userDetails });
  } else {
    res.status(403);
    res.send({ err: "incorrect ID password" });
  }
};

exports.validateUser = function (req, res, next) {
  res.json({ res: req.user, msg: "user validated", err: null });
};
