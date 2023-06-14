import connector from "#models/databaseUtil";
// import subject , department model
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
};

// eslint-disable-next-line  no-unused-vars
const FacultyInformationModel = connector.model("Faculty Schema", facultySchema);
