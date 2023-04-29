import util from "#util";
import user from "#models/user";

const otpStore = {};

async function login(req, res) {
  const { id, password } = req.body;
  const userValidated = await user.validateUser(id, password);
  if (userValidated) {
    const userDetails = {
      uid: userValidated.uid,
      name: userValidated.name,
      emailId: userValidated.emailId,
      type: userValidated.userType,
    };
    const token = util.genrateToken(userDetails);
    userDetails.token = token;
    res.json({ res: "welcome", user: userDetails });
  } else {
    res.status(403);
    res.json({ err: "incorrect ID password" });
  }
}

function validateUser(req, res) {
  res.json({ res: req.user, msg: "user validated", err: null });
}

async function sendOTP(req, res) {
  const { uid, emailId } = req.body;
  const userExists = await user.checkUser(uid, emailId);
  if (userExists) {
    const otp = Math.floor(1000 + Math.random() * 9000);
    otpStore[uid] = otp;
    util.sendOTP(emailId, otp);
    res.json({ res: "otp sent to emailID" });
  } else {
    res.json({ err: "incorrect UID or emailId" });
  }
}

async function resetPassword(req, res) {
  const { uid, otp, password } = req.body;
  if (otpStore[uid] === otp) {
    const passwordUpdated = await user.updatePassword(uid, password);
    if (passwordUpdated) res.json({ res: "successfully updated password" });
    else res.json({ err: "Something went wrong while updating password" });
  } else {
    res.json({ err: "incorrect otp" });
  }
}

export default {
  validateUser, sendOTP, resetPassword, login
};
