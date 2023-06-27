import connector from "#models/databaseUtil";

const otpStoreSchema = {
  uid: { type: String, unique: true, required: true },
  otp: { type: String, unique: true, required: true }
}

const OTPStore = connector.model("OTPStore", otpStoreSchema)

async function remove(filter) {
  const res = await OTPStore.findOneAndDelete(filter);
  return res;
}

async function create(uid, otp) {
  const otpStore = new OTPStore({
    uid,
    otp
  });
  const otpDoc = await otpStore.save();
  return otpDoc;
}

async function read(filter, limit = 1) {
  const otpData = await OTPStore.find(filter).limit(limit);
  return otpData;
}

async function update(filter, updateObject) {
  const otpDoc = await OTPStore.findOneAndUpdate(filter, updateObject, { upsert: true, new: true });
  return otpDoc;
}


export default {
  create, read, update, remove,
};

