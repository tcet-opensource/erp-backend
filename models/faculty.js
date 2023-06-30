const { connector } = require("./databaseUtil");

const facultySchema = {
  ERPID: { type: String, required: true },
  dateOfJoining: { type: Date, required: true, default: Date.now },
  dateOfLeaving: { type: Date, required: false },
  profileLink: { type: String, required: true },
  qualifications: { type: [String], required: true },
  tcetExperience: {
    type: Number,
    get() {
      const currentDate = new Date();
      const joiningYear = this.dateOfJoining.getFullYear(); // eslint-disable-next-line max-len
      const leavingYear = this.dateOfLeaving ? this.dateOfLeaving.getFullYear : currentDate.getFullYear;
      return leavingYear - joiningYear;
    },
    required: true,
  },
  totalExperience: { type: Number, required: true },
  achievements: { type: [String], required: true },
  areaOfSpecialization: { type: [String], required: true },
  papersPublishedPG: { type: Number, required: true },
  papersPublishedUG: { type: Number, required: true },
  department: { type: connector.Schema.Types.ObjectId, ref: "Department", required: true },
  preferredSubjects: { type: connector.Schema.Types.ObjectId, ref: "Course", required: true },
  designation: { type: [String], enum: ["HOD", "Assistant Professor", "Associate Professor", "Activity Head"], required: true },
  natureOfAssociation: { type: String, enum: ["Regular", "Contract", "Adjunct"], required: true },
  additionalResponsibilities: { type: String, required: true },
};

const Faculty = connector.model("Faculty", facultySchema);

// CRUD Operations

async function remove(filter) {
  const del = await Faculty.findOneAndDelete(filter);
  return del;
}

async function create(facultyData) {
  const faculty = new Faculty(facultyData);
  const facultyDoc = await faculty.save();
  return facultyDoc;
}

async function read(filter, limit = 1) {
  const facultyread = await Faculty.find(filter).limit(limit);
  return facultyread;
}

async function update(filter, updateObject) {
  const faculty = await Faculty.findOneAndUpdate(filter, updateObject, { upsert: true, new: true });
  return faculty;
}

export default {
  create, read, update, remove,
};
