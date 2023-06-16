import connector from "#models/databaseUtil";

const facultySchema = {
  empType: {
    type: String,
    required: true,
  },
  empUid: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfJoining: {
    type: Date,
    default: Date.now,
  },
  preferredSubjects: {
    type: [{
      type: connector.Schema.Types.ObjectId,
      ref: "Subject",
    }],
    required: true,
  },
  profileLink: {
    type: String, // URL
    required: true,
  },
  designation: {
    type: [String],
    required: true,
  },
  natureOfAssociation: {
    type: String,
    required: true,
  },
  uniApprovalStatus: {
    type: String,
    required: true,
  },
  qualification: {
    type: [String],
    required: true,
  },
  totalExperience: {
    years: {
      type: String,
      required: true,
    },
  },
  additionalResponsibilites: {
    type: String,
    required: true,
  },
  department: {
    type: connector.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    maxlength: 10,
  },
  office: {
    type: String,
    required: true,
  },
  isTenured: {
    type: Boolean,
    default: false,
  },
  facultyMetadata: {
    achievements: [{
      type: String,
      required: true,
    }],
    areaOfSpecialization: [{
      type: String,
      required: true,
    }],
    papersPublishedPG: {
      type: Number,
    },
    papersPublishedUG: {
      type: Number,
    },
  },
};

// eslint-disable-next-line  no-unused-vars, new-cap
const Faculty = new connector.model("Faculty", facultySchema);

async function create(
  empType,
  empUid,
  dateOfJoining,
  preferredSubjects,
  profileLink,
  designation,
  natureOfAssociation,
  uniApprovalStatus,
  qualification,
  totalExperience,
  additionalResponsibilites,
  department,
  email,
  phoneNumber,
  office,
  isTenured,
  facultyMetadata,
) {
  const faculty = new Faculty({
    empType,
    empUid,
    dateOfJoining,
    preferredSubjects,
    profileLink,
    designation,
    natureOfAssociation,
    uniApprovalStatus,
    qualification,
    totalExperience: { years: totalExperience },
    additionalResponsibilites,
    department,
    email,
    phoneNumber,
    office,
    isTenured,
    facultyMetadata: {
      achievements: facultyMetadata.achievements,
      areaOfSpecialization: facultyMetadata.areaOfSpecialization,
      paperPublishedPG: facultyMetadata.papersPublishedPG,
      paperPublishedUG: facultyMetadata.papersPublishedUG,
    },
  });
  const facultyDoc = await faculty.save();
  return facultyDoc;
}

async function remove(filter) {
  const res = await Faculty.findOneAndDelete(filter);
  return res;
}

async function read(filter, limit = 1) {
  const facultyData = await Faculty.find(filter).limit(limit);
  return facultyData;
}

async function update(filter, updateObject) {
  const faculty = await Faculty.findOneAndUpdate(filter, updateObject, { new: true });
  return faculty;
}

export default {
  create, read, update, remove,
};
