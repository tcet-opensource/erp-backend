const {connector} = require('./databaseUtil');
const {hashPassword,comparePasswords} = require("../util");
const userSchema = {
  name: {type: String,   required: true},
  emailId: {type: String, unique: true, required: true},
  password: {type: String,   required: true},
  uid: {type: String, unique: true, required: true},
  userType: {type: String,   required: true} 
}

const User = new connector.model('User', userSchema);
 

async function createUser(name, password, emailId, uid, userType){
  const user = new User({
    name: name, 
    password:password,
    emailId: emailId,
    uid: uid,
    userType: userType
  });

  //hash the password
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;

  let newUser = {};
  await user.save().then((savedUser) => {
    newUser = savedUser ;
  })
  .catch(err=>newUser.err=err);
  return newUser;
}

async function validateUser(uid, pass){
  let user = await User.findOne({uid: uid}).catch(err=>console.log(err))
  if(user){
    if(comparePasswords(pass,user.password))
      return user
    return null;
  }
  return null;
}

module.exports = {validateUser:validateUser, createUser:createUser}; 
