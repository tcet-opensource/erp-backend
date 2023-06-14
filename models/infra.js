const subjectContent = new connector.model("subject content", subjectContentSchema);
module.exports = {};

const { connector } = require("./databaseUtil");

const infrastructureSchema = {
    infraID: {type: Number, required: true},
    infraName: {type: String, required: true},
    infraType: {type: String, required: true},
    infraWing: {type: String, required: true},
    floor: {type: Number, required: true},
    capacity: {type:Number, required: true}
};

const infrastructureModel = new connector.model("Infrastructure", infrastructureSchema);;
module.exports = {};
