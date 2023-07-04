import connector from "#models/databaseUtil";

const tutorialSchema = {
  no: { type: Number, required: true },
  title: { type: String, unique: true, required: true },
  hours: { type: Number, required: true },
  cognitiveLevel:[{
    type:String,
    enum:['L1','L2','L3','L4','L5','L6'],
    default:'L1'
  }]
};

const Tutorial= connector.model("Tutorial", tutorialSchema);

