const { connector } = require("./databaseUtil");

const BankSchema = {
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  bank_name: {
    type: String,
    required: true,
    minLength: 7,
  },
  bank_acc: {
    type: String,
    required: true,
    unique: true,
  },
  bank_branch: {
    type: String,
    required: true,
  },
  bank_ifsc: {
    type: String,
    required: true,
    maxLength: 11,
    minLength: 11,
  },
  bank_micr: {
    type: String,
    required: true,
    maxLength: 9,
    minLength: 9,
  },
};

const Bank = new connector.model("Bank", BankSchema);

export const AddBankdetails = async (req, res) => {
  const id = req.body.userId;
  const newBank = new Bank({
    userId: id, //we will get it after by jwt
    ...req.body,
  });
  try {
    const existing = await Bank.findOne({ userId: id });
    if (existing) return res.status(400).send("Bank details already exists");
    await newBank.save();
    res.status(201).json("Bank account details added");
  } catch (error) {
    console.log(error);
  }
};
export const GetBankdetails = async (req, res) => {
  const id = req.params.id; //get it by jwt as user loggs in we will have it;
  try {
    const data = await Bank.findOne({ userId: id });
    if (!data) return res.status(404).send("No data found for this id");

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};
export const updateBankdetails = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Bank.findOne({ _id: id });
    if (!data) return res.status(404).send("bank account details not found");

    // if(data.userId !==req.userId ) thsi statement will help us know that if the user is the specific user trying to update
    const datas = await Bank.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(datas);
  } catch (error) {
    console.log(error);
  }
};
export const deleteBankdetails = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Bank.findOne({ _id: id });
    if (!data) return res.status(404).send("bank account details not found");
    // if(data.userId !==req.userId ) this statement will help us know that if the user is the specific user trying to delete

    await Bank.findByIdAndDelete(req.params.id);
    res.status(200).send("Bank account deleted");
  } catch (error) {
    console.log(error);
  }
};
