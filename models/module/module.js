import connector from "#models/databaseUtil";
import { logger } from "#util";

connector.set("debug", true);

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

// eslint-disable-next-line  no-unused-vars
const Faculty = new connector.model("Faculty", facultySchema);

async function create(empType, empUid, dateOfJoining, preferredSubjects, profileLink, designation, natureOfAssociation, uniApprovalStatus, qualification, totalExperience, additionalResponsibilites, department, email, phoneNumber, office, isTenured, facultyMetadata) {
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
    facultyMetadata:
    {
      achievements: facultyMetadata.achievements,
      area_of_specialization: facultyMetadata.area_of_specialization,
      papers_publishedPG: facultyMetadata.papers_publishedPG,
      papers_publishedUG: facultyMetadata.papers_publishedUG,
    },

  });
  const facultyDoc = await facultyDoc.save();
  return facultyDoc;
}

async function remove(filter) {
  const res = await Faculty.findOneAndDelete(filter);
  return res;
}

async function read(filter, limit = 1) {
  const facultyData = await facultyData.find(filter).limit(limit);
  return facultyData;
}

async function update(filter, updateObject) {
  const faculty = await faculty.findOneAndUpdate(filter, updateObject, { new: true });
  return faculty;
}

export default {
  create, read, update, remove,
};

/* emp_type: "Professor",
emp_uid: "123456",
date_of_joining: new Date(),
preferred_subjects: ["subjectId1", "subjectId2"],
profile_link: "https://example.com/profile",
designation: ["Associate Professor", "Researcher"],
nature_of_association: "Permanent",
uni_approval_status: "Approved",
qualification: ["Ph.D.", "Masters"],
total_experience: { years: "10" },
additional_responsibilites: "Handling research projects",
department: "departmentId",
email: "faculty@example.com",
phoneNumber: 1234567890,
office: "Building A, Room 101",
isTenured: true,
joinedDate: new Date(),
facultyMetadata: {
  achievements: ["Award 1", "Award 2"],
  area_of_specialization: ["Specialization 1", "Specialization 2"],
  papers_publishedPG: 5,
  papers_publishedUG: 10,
*/
