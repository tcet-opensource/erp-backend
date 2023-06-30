import connector from "#models/databaseUtil";

const moduleSchema = {
  moduleNo: { type: Number, required: true },
  moduleName: { type: String, required: true },
  moduleOutcome: { type: String, required: true },
  moduleContents: [{ type: String, required: true }],
  hrsPerModule: { type: Number, required: true },
  cognitiveLevels: {
    type: String,
    required: true,
    enum: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
},
};

const Module = connector.model("Module", moduleSchema);

async function remove(filter) {
  const res = await Module.findOneAndDelete(filter);
  return res;
}

async function create(
  moduleNo,
  moduleName,
  moduleOutcome,
  moduleContents,
  hrsPerModule,
  cognitiveLevels,
) {
  const module = new Module({
    moduleNo,
    moduleName,
    moduleOutcome,
    moduleContents,
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
