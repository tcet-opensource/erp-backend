import connector from "#models/databaseUtil";

const practicalSchema = {
  no: { type: Number, required: true },
  type: { type: String, required: true },
  title: { type: String, required: true },
  hours: { type: Number, required: true },
  cognitiveLevels: [{
    type: String,
    required: true,
    enum: ["L1", "L2", "L3", "L4", "L5", "L6"],
  }],
};

const Practical = connector.model("Practical", practicalSchema);
