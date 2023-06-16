import connector from "#models/databaseUtil";

const accreditationSchema = {
  uid: { type: String, unique: true, required: true },
  accreditationName: { type: String, required: true },
  agencyName: { type: String, required: true },
  dateofAccreditation: { type: Date, required: true },
  dateofExpiry: { type: Date, required: true },
};

const Accreditation = new connector.model("Accreditation", accreditationSchema);

async function remove(filter) {
  const res = await Accreditation.findOneAndDelete(filter);
  return res;
}

async function create(uid, accreditationName, agencyName, dateofAccreditation, dateofExpiry) {
  const accreditation = new Accreditation({
    accreditationName,
    agencyName,
    uid,
    dateofAccreditation,
    dateofExpiry,
  });
  const accreditationDoc = await accreditation.save();
  return accreditationDoc;
}

async function read(filter, limit = 1) {
  const accreditationData = await Accreditation.find(filter).limit(limit);
  return accreditationData;
}

async function update(filter, updateObject) {
  const accreditation = await Accreditation.findOneAndUpdate(filter, updateObject, { new: true });
  return accreditation;
}

export default {
  create, read, update, remove,
};
