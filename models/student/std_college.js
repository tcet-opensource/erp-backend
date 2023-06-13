import connector from "#models/databaseUtil";

const studentCollegeSchema = {
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  admission_year: {
    type: String,
    required: true,
  },
  student_code: {
    type: String,
  },
  roll_no: {
    type: String,
  },
  admission_status: {
    type: String,
    required: true,
  },
  admission_pattern: {
    type: String,
  },
  admission_category: {
    type: String,
    required: true,
  },
  seat_desc: {
    type: String,
  },
  quota_type: {
    type: String,
    required: true,
  },
  is_boarder_student: {
    type: Boolean,
  },
  seat_type: {
    type: String,
    required: true,
  },
  seat_sub_type: {
    type: String,
    required: true,
  },
  eligibility_no: {
    type: String,
    required: true,
  },
  enrollment_no: {
    type: String,
    required: true,
    unique: true,
  },
};

// eslint-disable-next-line  no-unused-vars
const studentCollege = connector.model("Student college", studentCollegeSchema);
