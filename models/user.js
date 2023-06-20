import connector from "#models/databaseUtil";
import bcrypt from "bcrypt";
import { logger } from "#util";
import { hashPassword } from "#util";

connector.set("debug", true);
const { Schema } = connector; // Assuming `connector` is the Mongoose instance

const userSchema = new Schema({
  name: { type: String, required: true },
  emailId: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  uid: { type: String, unique: true, required: true },
  userType: { type: String, required: true },
});

//
// userSchema.pre('save', async function (next) {
//   if (this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }
//   next();
// });

const User = connector.model("User", userSchema);

async function remove(filter) {
  const res = await User.findOneAndDelete(filter);
  return res;
}

async function create(name, password, emailId, uid, userType) {
  const user = new User({
    name:"Shivam",
    password:"hello",
    emailId:"he85@gmail.com",
    uid:"hey9",
    userType:"student",
  });

  await hashPassword(user);

  const userDoc = await user.save();
  return userDoc;
  validateUser(uid,pass)

}
 
// create()

async function validateUser(uid, pass){
  let user = await User.findOne({uid: uid}).catch(err=>console.log(err))
  if(user){
   // if(user.password==pass)
    if(comparePasswords(pass,user.password))
      return user
      console.log("user verified")
    return null;
  }
  return null;
}


async function read(filter, limit = 1) {
  const userData = await User.find(filter).limit(limit);
  return userData;
}

async function update(filter, updateObject) {
  const user = await User.findOneAndUpdate(filter, updateObject, { new: true });
  return user;
}

export default {
  create, read, update, remove,  
};
