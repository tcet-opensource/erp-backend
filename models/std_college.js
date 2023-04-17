const { connector } = require("./databaseUtil");

const StudentCollegeSchema = {
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  AdmissionYear: {
    type: String,
    required: true,
  },
  StudentCode: {
    type: String,
  },
  Rollno: {
    type: String,
  },
  AdmissionStatus: {
    type: String,
    required: true,
  },
  AdmissionPattern: {
    type: String,
  },
  Admissioncategory: {
    type: String,
    required: true,
  },
  SeatDesc: {
    type: String,
  },
  QuotaType: {
    type: String,
    required: true,
  },
  QuotaType: {
    type: String,
    required: true,
  },
  Boarder: {
    type: Boolean,
  },
  Seattype: {
    type: String,
    required: true,
  },
  Seatsubtype: {
    type: String,
    required: true,
  },
  EligibilityNo: {
    type: String,
    required: true,
  },
  EnrollmentNo: {
    type: String,
    required: true,
    unique: true,
  },
};

const studentcollegeCollege = new connector.model(
  "StudentCollegeSchema",
  StudentCollegeSchema
);

module.exports = {};
