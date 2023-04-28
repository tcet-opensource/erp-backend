const { connector } = require("../databaseUtil");

const employeeCurrentEmployementSchema = {
  uid: {type: String, require: true},
  date_of_joining: { type: Date, required: true },
  department_name: { type: String, required: true },
  designation: { type: String, required: true },
  job_status: { type: String, required: true },
  job_profile: { type: String, required: true },
  current_ctc: { type: Number, required: true },
};

const employeeCurrentEmployement = new connector.model(
  "Employee current Employement",
  employeeCurrentEmployementSchema
);

module.exports = {};
