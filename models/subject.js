const { connector } = require("#models/databaseUtil");

const subjectcontentSchema = {
  courseCode: { type: String, required: true },
  courseName: { type: String, required: true },
  totalCredit: { type: Number, required: true },
  duration: { type: Number, required: true },
  subID: { type: String, required: true },
  subName: { type: String, required: true },
  semester: { type: String, required: true },
  ltpCredDist: { type: [Number], required: true },
  subType: { type: String, enum: ["open", "professional", "core"], required: true }, // can be open, professional, or core
  prerequisites: { type: String, required: true },
  courseObjective: { type: String, required: true },
  courseOutcomes: [{
    courseOutcome: { type: String },
    RBTLevel: { type: String },
  }], // this is the modules from syllabus
  reccTextbooks: { type: [String], required: true },
  refBooks: { type: [String], required: true },
  evalScheme: { type: [Number], required: true },
  maxMarks: { type: Number, required: true },
};

// eslint-disable-next-line  no-unused-vars
const subjectcontentModel = connector.model("subjectcontent", subjectcontentSchema);
