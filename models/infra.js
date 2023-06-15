const { connector } = require("#models/databaseUtil");

const infrastructureSchema = {
    infraID: {type: Number, required: true},
    infraName: {type: String, required: true},
    infraType: {type: String, required: true},
    infraWing: {type: String, required: true},
    floor: {type: Number, required: true},
    capacity: {type:Number, required: true}
};

const infrastructureModel = new connector.model("Infrastructure", infrastructureSchema);
