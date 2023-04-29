import connector from "#models/databaseUtil";

const userSchema = {
  name: { type: String, required: true },
  emailId: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  uid: { type: String, unique: true, required: true },
  userType: { type: String, required: true },
};

const User = connector.model("User", userSchema);

async function createUser(name, password, emailId, uid, userType) {
  const user = new User({
    name,
    password,
    emailId,
    uid,
    userType,
  });
  let newUser = {};
  await user.save().then((savedUser) => {
    newUser = savedUser;
  })
    .catch((err) => { newUser.err = err; });
  return newUser;
}

async function validateUser(uid, pass) {
  const user = await User.findOne({ uid }).catch((err) => console.log(err));
  if (user) {
    if (user.password === pass) return user;
    return null;
  }
  return null;
}

async function checkUser(uid, emailId) {
  const user = await User.findOne({ uid, emailId }).catch((err) => console.log(err));
  if (user) return true;
  return false;
}

async function updatePassword(uid, password) {
  const user = await User.findOne({ uid }).catch((err) => console.log(err));
  if (user) {
    user.password = password;
    const userUpdated = await user.save();
    if (userUpdated) return true;
    return false;
  }
  return false;
}

async function deleteUser(uid) {
  const res = await User.findOneAndDelete({ uid: { $eq: uid } });
  return res;
}

export default {
  validateUser, createUser, checkUser, updatePassword, deleteUser,
};
