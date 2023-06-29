import connector from "#models/databaseUtil";

const infrastructureSchema = {
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Wing: { type: String, required: true },
  floor: { type: Number, required: true },
  capacity: { type: Number, required: true },
};

const Infrastructure = connector.model("Infrastructure", infrastructureSchema);

async function remove(filter) {
  const res = await Infrastructure.findOneAndDelete(filter);
  return res;
}

async function create(Name, Type, Wing, floor, capacity) {
  const infrastructure = new Infrastructure({
    Name,
    Type,
    Wing,
    floor,
    capacity,
  });
  const infrastructureDoc = await infrastructure.save();
  return infrastructureDoc;
}

async function read(filter, limit = 1) {
  const infrastructureData = await Infrastructure.find(filter).limit(limit);
  return infrastructureData;
}

async function update(filter, updateObject) {
  const infrastructure = await Infrastructure.findOneAndUpdate(filter, updateObject, { new: true });
  return infrastructure;
}

export default {
  create, read, update, remove,
};
