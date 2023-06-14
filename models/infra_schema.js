const { connector } = require("./databaseUtil");

const infraStructureSchema = {
    infraID: {type: Number, required: true},
    infraName: {type: String, required: true},
    infraType: {type: String, required: true},
    infraWing: {type: String, required: true},
    floor: {type: Number, required: true},
    capacity: {type:Number, required: true}
};

const infraStructure = new connector.model("Infra strucutre", infraStructureSchema);
module.exports = {};