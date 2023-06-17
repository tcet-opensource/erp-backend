import connector from "#models/databaseUtil";

const infrastructureSchema = {
  infraID: { type: Number, unique: true, required: true },
  infraName: { type: String, required: true },
  infraType: { type: String, required: true },
  infraWing: { type: String, required: true },
  floor: { type: Number, required: true },
  capacity: { type: Number, required: true },
};

const InfrastructureModel = new connector.model("Infrastructure", infrastructureSchema);

async function remove(filter) {
  const res = await InfrastructureModel.findOneAndDelete(filter);
  return res;
}

async function create(infraID, infraName, infraType, infraWing, floor, capacity) {
  const infrastructure = new InfrastructureModel({
    infraID,
    infraName,
    infraType,
    infraWing,
    floor,
    capacity,
  });
  const infrastructureDoc = await infrastructure.save();
  return infrastructureDoc;
}

async function read(filter, limit = 1) {
  const infrastructureData = await InfrastructureModel.find(filter).limit(limit);
  return infrastructureData;
}

async function update(filter, updateObject) {
  const infrastructure = await InfrastructureModel.findOneAndUpdate(filter, updateObject, { new: true });
  return infrastructure;
}

export default {
  create, read, update, remove,
};
