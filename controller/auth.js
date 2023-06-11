const { generateToken, sendOTP } = require('../util');
const user = require('../models/user');

otpStore = {}

exports.login = async function(req, res, next) {
	const {id, password} = req.body;
	let userValidated = await user.validateUser(id, password); 
	if(userValidated){
		userDetails = {
		"uid": userValidated.uid,
		"name": userValidated.name, 
		"emailId":userValidated.emailId,
		"type": userValidated.userType,
		}
		let token = generateToken(userDetails, req.ip);
		userDetails["token"] = token;
		res.send({res:"welcome", user:userDetails})
	}
	else{
		res.status(403)
		res.send({err:"incorrect ID password"});
		}
}

exports.validateUser = function(req, res, next) {
  res.json({res: req.user, msg: "user validated", err:null})
}

exports.sendOTP = async function(req, res, next){
  const {uid, emailId} = req.body;
  let userExists = await user.checkUser(uid, emailId);
  if(userExists){
  	let otp = Math.floor(1000 + Math.random() * 9000);
  	otpStore[uid] = otp;
  	sendOTP(emailId, otp);
  	res.send({res:"otp sent to emailID"})
  }
  else{
    res.send({err:"incorrect UID or emailId"})
  }
}

exports.resetPassword = async function(req, res, next){
	const {uid, otp, password} = req.body;
	if(otpStore[uid]==otp){
		let passwordUpdated = await user.updatePassword(uid, password);
		if(passwordUpdated)
			res.send({res:"successfully updated password"})
		else
			res.send({err:"Something went wrong while updating password"})
		}
	else{
		res.send({err:"incorrect otp"});
	}
}

