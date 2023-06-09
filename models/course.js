const { connector } = require('#models/databaseUtil')

const courseSchema = {
  name: { type: String, required: true },
  code: { type: String, required: true },
  theoryHours: { type: Number, required: true },
  tutorialHours: { type: Number, required: true },
  practicalHours: { type: Number, required: true },
  totalCredit: { type: Number, required: true },
  ISAMarks: { type: Number, required: true },
  ESEMarks: { type: Number, required: true },
  tutorialMarks: { type: Number, required: true },
  practicalMarks: { type: Number, required: true },
  semester: {
    type: connector.Schema.Types.ObjectId,
    ref: 'Semester',
    required: true,
  },
  subType: {
    type: String,
    enum: ['open', 'professional', 'core'],
    required: true,
  }, // can be open, professional, or core
  prerequisites: { type: [String], required: true }, // array of strings
  objective: { type: String, required: true },
  outcomes: [
    {
      outcome: { type: String },
      RBTLevel: { type: [String] },
    },
  ], // this is the modules from syllabus
  modules: [{ type: connector.Schema.Types.ObjectId, ref: 'Module' }],
  practicals: [{ type: connector.Schema.Types.ObjectId, ref: 'Practical' }],
  tutorials: [{ type: connector.Schema.Types.ObjectId, ref: 'Tutorial' }],
  assignments: [{ type: connector.Schema.Types.ObjectId, ref: 'Assignment' }],
  reccTextbooks: { type: [String], required: true },
  refBooks: { type: [String], required: true },
  evalScheme: { type: [Number], required: true },
}

// virtual for total hours
courseSchema.virtual('totalHours').get(function() {
  return this.theoryHours + this.tutorialHours + this.practicalHours
})

// virtual for theory marks
courseSchema.virtual('theoryMarks').get(function() {
  return this.ISAMarks + this.ESEMarks
})

// virtual for total marks
courseSchema.virtual('totalMarks').get(function() {
  return this.theoryMarks + this.tutorialMarks + this.practicalMarks
})

const Course = connector.model('Course', courseSchema)

/// CRUD operations ///

async function create(courseData) {
  const course = new Course(courseData)
  const createdCourse = await course.save()
  return createdCourse
}

async function read(filter, limit = 1) {
  const courseData = await Course.find(filter).limit(limit)
  return courseData
}

async function update(filter, updateObject) {
  const updatedCourse = await Course.findOneAndUpdate(filter, updateObject, {
    new: true,
  }).exec()
  return updatedCourse
}

async function remove(filter) {
  const deletedCourse = await Course.findOneAndDelete(filter).exec()
  return deletedCourse
}

export default {
  create,
  read,
  update,
  remove,
}
