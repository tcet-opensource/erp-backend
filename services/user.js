import User from "#models/user";
import databaseError from "#error/database";

export async function authenticateUser(uid, password) {
  const user = await User.read({ uid, password }, 1);
  if (user[0].uid === uid) {
    return user[0];
  }
  throw new databaseError.UserDoesNotExistError();
}

export async function userExists(uid, email) {
  const user = await User.read({ uid, emailId: email }, 1);
  if (user[0].uid === uid) return true;
  return false;
}

export async function updatePassword(uid, password) {
  const user = await User.update({ uid }, { password });
  if (user.uid === uid) return user;
  throw new databaseError.UpdateError("User");
}

export async function allUsers() {
  const allUser = await User.read({}, 0);
  return allUser;
}

export async function createUser(name, password, emailId, uid, userType) {
  const newUser = await User.create(name, password, emailId, uid, userType);
  if (newUser.uid === uid) {
    return newUser;
  }
  throw new databaseError.DataEntryError("User");
}
