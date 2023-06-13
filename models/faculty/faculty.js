import connector from "#models/databaseUtil";
import { subjects } from "#models/subjects";
import { department } from "#models/department";

const facultySchema = {
  emp_type: {
    type: String,
    required: true,
  },
  emp_uid: {
    type: String,
    required: true,
    unique: true,
  },
  date_of_joining: {
    type: Date,
    required: true,
  },
  // this will call subject model or subject schema in array format
  preferred_subjects: [subjects],
  profile_link: {
    type: String, // URL
    required: true,
  },
  designation: {
    type: [String],
    required: true,
  },
  nature_of_association: {
    type: String,
  },
  uni_approval_status: {
    type: String,
    required: true,
  },
  qualification: {
    type: [String],
    required: true,
  },
  total_experience: {
    years: {
      type: String,
      required: true,
    },
  },
  additional_responsibilites: {
    type: String,
    required: true,
  },
  department: [department],
  facultyMetadata: {
    achievements: [{
      type: String,
      required: true,
    }],
    area_of_specialization: [{
      type: String,
      required: true,
    }],
    papers_publishedPG: {
      type: Number,
    },
    papers_publishedUG: {
      type: Number,
    },
  },
};
// eslint-disable-next-line  no-unused-vars
const FacultyInformationSchema = connector.model("Faulty Schema", facultySchema);
