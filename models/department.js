const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  depId: {
    type: Number,
    required: true,
    unique: true,
  },
  depName: {
    type: String,
    required: true,
  },
  yearOfStarting: {
    type: Date,
    required: true,
  },
  accreditation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Accreditation',
  },
  infrastructure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Infrastructure',
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  }],
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
