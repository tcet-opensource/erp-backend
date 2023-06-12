const {connector} = require('./databaseUtil');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
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

const Faculty = new connector.model("Faculty", facultySchema);

module.exports = Faculty;
