import connector from "#models/databaseUtil";
import { hashPassword, logger } from "#util";

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

async function create(name, password, emailId, uid, userType) {
  password = await hashPassword(password);
  const user = new User({
    name,
    password,
    emailId,
    uid,
    userType,
  });
  const userDoc = await user.save();
  return userDoc;
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
