import connector from '#models/databaseUtil';

const moduleSchema = {
  No: { type: Number, required: true },
  Name: { type: String, required: true },
  Outcome: { type: String, required: true },
  Contents: [{ type: String, required: true }],
  hrsPerModule: { type: Number, required: true },
  cognitiveLevels: [{ type: String, required: true }],
};

const Module = connector.model('Module', moduleSchema);

async function remove(filter) {
  const res = await Module.findOneAndDelete(filter);
  return res;
}

async function create(
  No,
  Name,
  Outcome,
  Contents,
  hrsPerModule,
  cognitiveLevels
) {
  const module = new Module({
    No,
    Name,
    Outcome,
    Contents,
    hrsPerModule,
    cognitiveLevels,
  });
  const moduleDoc = await module.save();
  return moduleDoc;
}

async function read(filter, limit = 1) {
  const moduleData = await Module.find(filter).limit(limit);
  return moduleData;
}

async function update(filter, updateObject) {
  const module = await Module.findOneAndUpdate(filter, updateObject, {
    new: true,
  });
  return module;
}

export default {
  create,
  read,
  update,
  remove,
};
