const { connector } = require('./databaseUtil');

const moduleSchema = {
  modNo: { type: Number, required: true },
  moduleName: { type: String, required: true },
  moduleOutcome: { type: String, required: true },
  moduleContents: [{ type: String, required: true }],
  hrsPerModule: { type: Number, required: true },
  cognitiveLevels: [{ type: String, required: true }],
};

const modules = new connector.model('Module', moduleSchema);
module.exports = { modules };
