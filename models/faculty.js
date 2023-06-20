const { connector } = require('./databaseUtil');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  empType: {
    type: String,
    required: true,
  },
  emdUID: {
    type: String,
    required: true,
  },
  preferredSubjects: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
    required: true,
  },
  profileLink: {
    type: String,
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
  qualifications: {
    type: [String],
    required: true,
  },
  totalExperience: {
    type: String,
    required: true,
  },
  additionalResponsibilities: {
    type: String,
    required: true,
  },
  achievements: {
    type: [String],
    required: true,
  },
  areaOfSpecialization: {
    type: [String],
    required: true,
  },
  papersPublishedPG: {
    type: Number,
    required: true,
  },
  papersPublishedUG: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  office: {
    type: String,
    required: true,
  },
  isTenured: {
    type: Boolean,
    default: false,
  },
  joinedDate: {
    type: Date,
    default: Date.now,
  },
});

const Faculty = connector.model('Faculty', facultySchema);

module.exports = Faculty;
