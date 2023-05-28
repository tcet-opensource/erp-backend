import connector from "#models/databaseUtil";

const employeeBankSchema = {
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  bank_name: {
    type: String,
    required: true,
    minLength: 7,
  },
  bank_acc: {
    type: String,
    required: true,
    unique: true,
  },
  bank_branch: {
    type: String,
    required: true,
  },
  bank_ifsc: {
    type: String,
    required: true,
    maxLength: 11,
    minLength: 11,
  },
  bank_micr: {
    type: String,
    required: true,
    maxLength: 9,
    minLength: 9,
  },
  appointment_approve_sg_dte: {
    type: String,
  },
};

// eslint-disable-next-line  no-unused-vars
const empBank = connector.model("Employee bank", employeeBankSchema);
