import connector from "#models/databaseUtil";

const studentMedicalSchema = {
  uid: { type: String, require: true },
  blood_group: { type: String, required: true },
  past_medical_history: { type: String, required: true },
  immunisation_history: { type: String, required: true },
  chronic_medical_conditions: { type: String },
  parents_emailId: { type: String, required: true },
  parents_contact: { type: Number, required: true },
  relative_contacts: { type: Number, required: true },
};

// eslint-disable-next-line  no-unused-vars
const medicalHistory = connector.model("Student medical", studentMedicalSchema);
