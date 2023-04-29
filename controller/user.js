const user = require('../models/user');

exports.addUser = async function(req, res, next){
  const {name,password,emailId,uid,userType} = req.body;
  let newUser = await user.createUser(name,password,emailId,uid,userType);
  if(newUser.id!=null)
  	res.json({"res":"added user "+newUser.id});
  else
  	res.json({err:newUser.err});
}
