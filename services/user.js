import User from "#models/user"
import { DataEntryError, UpdateError, UserDoesNotExist } from "#error/database";

export async function authenticateUser(uid, password){
    let user = await User.read({uid: uid, password: password}, 1);
    if(user[0].uid === uid){
        return user[0];
    }
    throw new UserDoesNotExist();
}

export async function userExists(uid, email){
    let user = await User.read({uid: uid, emailID: email});
    if(user.uid === uid)
        return true;
    return false;
}

export async function updatePassword(uid, password){
    let user = await User.update({"uid": uid}, {"password": password});
    if(user.uid === uid)
        return user;
    throw new UpdateError("User");
}

export async function allUsers(){
    const allUser = await user.read({}, 0);
    return allUser;
}

export async function createUser(name, password, emailId, uid, userType){
    const newUser = await User.create(name, password, emailId, uid, userType);
    if(newUser.uid === uid){
        return newUser;
    }
    throw new DataEntryError("User");
}