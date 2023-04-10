const { connector } = require("./databaseUtil");

const empCurrentDetails_Schema = {
  date_of_joining: { type: Date, required: true },
  department_name: { type: String, required: true },
  designation: { type: String, required: true },
  job_status: { type: String, required: true },
  job_profile: { type: String, required: true },
  current_ctc: { type: String, required: true },
};

const empCurrentDetails = new connector.model(
  "empCurrentDetails",
  empCurrentDetails_Schema
);

module.exports = empCurrentDetails;
