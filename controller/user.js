import user from "#models/user";
import { allUsers, createUser } from "#services/user";

async function addUser(req, res) {
  const {
    name, password, emailId, uid, userType,
  } = req.body;
  try{
    let newUser = await createUser(name, password, emailId, uid, userType);
    res.json({ res: `added user ${newUser.id}` });
  }
  catch(error){
    res.json({ err: "Error while inserting in DB" });
  } 
}

async function getAllUser(req, res){
  const allUser = await allUsers();
  res.json(allUser);
} 

export default { addUser, getAllUser };
