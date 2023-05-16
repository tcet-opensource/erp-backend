import connector from "#models/databaseUtil";

connector.set("debug", true);
const userSchema = {
  name: { type: String, required: true },
  emailId: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  uid: { type: String, unique: true, required: true },
  userType: { type: String, required: true },
};

const User = connector.model("User", userSchema);

async function remove(filter) {
  const res = await User.findOneAndDelete(filter);
  return res;
}

async function create(name, password, emailId, uid, userType){
  const user = new User({
    name,
    password,
    emailId,
    uid,
    userType,
  });
  let userDoc = await user.save().catch(err=>{return err});
  return userDoc;
}

async function read(filter, limit=1){
  const userData = await User.find(filter).limit(limit).catch(err=>{console.log(err)});
  return userData;
}

async function update(filter, update){
  let user = await User.findOneAndUpdate(filter, update, {new:true});
  if(user.id)
    return user;
  return "Error";
}

export default {
  create, read, update, remove
};
