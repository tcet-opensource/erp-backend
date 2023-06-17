import connector from '#models/databaseUtil';

connector.set('debug', true);
const moduleSchema = {
  modNo: { type: Number, required: true },
  moduleName: { type: String, required: true },
  moduleOutcome: { type: String, required: true },
  moduleContents: [{ type: String, required: true }],
  hrsPerModule: { type: Number, required: true },
  cognitiveLevels: [{ type: String, required: true }],
};

const moduleModel = new connector.model('Module', moduleSchema);

async function remove(filter) {
  const res = await moduleModel.findOneAndDelete(filter);
  return res;
}

async function create(
  modNo,
  moduleName,
  moduleOutcome,
  moduleContents,
  hrsPerModule,
  cognitiveLevels
) {
  const module = new moduleModel({
    modNo,
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
  const moduleData = await moduleModel.find(filter).limit(limit);
  return moduleData;
}

async function update(filter, updateObject) {
  const module = await moduleModel.findOneAndUpdate(filter, updateObject, {
    new: true,
  });
  return module;
}

async function test() {
  await create(1, 'Maths', 'abc', 'xyz', 5, 'abc');
  const reading = await read({});
  console.log(reading);
}

test();

export default {
  create,
  read,
  update,
  remove,
};
