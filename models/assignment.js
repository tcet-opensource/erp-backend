import connector from "#models/databaseUtil";

const assignmentSchema = {
  no: { type: Number, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true, enum: ["FA", "RA"] },
  marks: { type: Number, required: true },
};

// eslint-disable-next-line  no-unused-vars
const Assignment = connector.model("Assignment", assignmentSchema);
