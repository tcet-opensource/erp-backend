import user from "#models/user";

async function addUser(req, res) {
  const {
    name, password, emailId, uid, userType,
  } = req.body;
  const newUser = await user.createUser(name, password, emailId, uid, userType);
  if (newUser.id != null) res.json({ res: `added user ${newUser.id}` });
  else res.json({ err: newUser.err });
}

export default { addUser };
