import user from "#models/user";

async function addUser(req, res) {
  const {
    name, password, emailId, uid, userType,
  } = req.body;
  const newUser = await user.create(name, password, emailId, uid, userType);
  if (newUser.id != null) res.json({ res: `added user ${newUser.id}` });
  else res.json({ err: "Error while inserting in DB" });
}

async function getAllUser(req, res){
  const allUser = await user.read({}, 0);
  res.json(allUser);
} 

export default { addUser, getAllUser };
