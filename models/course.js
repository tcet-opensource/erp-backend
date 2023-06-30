const { connector } = require("#models/databaseUtil");

const courseSchema = {
  name: { type: String, required: true },
  code: { type: String, required: true },
  theoryHours: { type: Number, required: true },
  tutorialHours: { type: Number, required: true },
  practicalHours: { type: Number, required: true },
  totalHours: {   // virtual to return total hours based on th + tut + prac hrs
    type: Number,
    get: function () {
      return this.theoryHours + this.tutorialHours + this.practicalHours;
    },
    required: true,
  },
  totalCredit: { type: Number, required: true },
  ISAMarks: { type: Number, required: true },
  ESEMarks: { type: Number, required: true },
  theoryMarks: {  // virtual to return theory marks
    type: Number,
    get: function () {
      return this.ISAMarks + this.ESEMarks;
    },
    required: true,
  },
  tutorialMarks: { type: Number, required: true },
  practicalMarks: { type: Number, required: true },
  totalMarks: {
    type: Number, 
    get: function() {
      return this.theoryMarks + this.tutorialMarks + this.practicalMarks;
    }
  },
  semester: { type: connector.Schema.Types.ObjectId, ref: "Semester", required: true },
  subType: { type: String, enum: ["open", "professional", "core"], required: true }, // can be open, professional, or core
  prerequisites: { type: [String], required: true },  // array of strings
  objective: { type: String, required: true },
  outcomes: [{
    outcome: { type: String },
    RBTLevel: { type: [String] },
  }], // this is the modules from syllabus
  modules: [{ type: connector.Schema.Types.ObjectId, ref: "Module" }],
  practicals: [{ type: connector.Schema.Types.ObjectId, ref: "Practical" }],
  tutorials: [{ type: connector.Schema.Types.ObjectId, ref: "Tutorial" }],
  assignments: [{ type: connector.Schema.Types.ObjectId, ref: "Assignment" }],
  reccTextbooks: { type: [String], required: true },
  refBooks: { type: [String], required: true },
  evalScheme: { type: [Number], required: true },
};

// eslint-disable-next-line  no-unused-vars
const Course = connector.model("Course", courseSchema);

/// CRUD operations ///

// Create a new course
async function create(courseData) {
  const course = new Course(courseData);
  const createdCourse = await course.save();
  return createdCourse;
}

// Read (find/get) a course by its ID
async function read(courseId) {
  const course = await Course.findById(courseId).exec();
  return course;
}

// Update a course by its ID
async function update(courseId, courseData) {
  const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, {
    new: true,
  }).exec();
  return updatedCourse;
}

// 
async function remove(courseId) {
  const deletedCourse = await Course.findByIdAndDelete(courseId).exec();
  return deletedCourse;
}

export default {
  create, read, update, remove,
};
