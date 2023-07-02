import connector from "./databaseUtil";

const organizationSchema = {
  parent: { type: connector.Schema.Types.ObjectId, ref: "Organization", required: "true" },
  startDate: { type: Date, required: true },
  name: { type: String, required: true },
  accreditation: { type: connector.Schema.Types.ObjectId, ref: "Accrediation", required: "true" },
};


const Organization = connector.model("Organization", organizationSchema);

async function remove(filter) {
  const res = await Organization.findOneAndDelete(filter);
  return res;
}

async function create(parent, startDate, name, accreditation) {
  const org = new Organization({
    parent,
    startDate,
    name,
    accreditation,
  });
  const orgDoc = await org.save();
  return orgDoc;
}

async function read(filter, limit = 1) {
  const orgData = await Organization.find(filter).limit(limit);
  return orgData;
}

async function update(filter, updateObject) {
  const org = await Organization.findOneAndUpdate(filter, updateObject, { new: true });
  return org;
}

export default {
  create, read, update, remove,
};
