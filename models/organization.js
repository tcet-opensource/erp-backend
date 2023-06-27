import connector from "./databaseUtil";

const organizationSchema = {
  parent: { type: connector.Schema.Types.ObjectId, ref: "Organization", required: "true" },
  orgID: { type: String, required: true },
  orgName: { type: String, required: true },
  orgAddress: { type: String, required: true },
  orgInfra: [{ type: connector.Schema.Types.ObjectId, ref: "Infrastructure", required: "true" }],
  accreditation: { type: connector.Schema.Types.ObjectId, ref: "Accrediation", required: "true" },
  department: [{ type: connector.Schema.Types.ObjectId, ref: "Department", required: "true" }],
  employees: [{ type: connector.Schema.Types.ObjectId, ref: "Faculty", required: "true" }],

};

// eslint-disable-next-line  no-unused-vars
const Organization = connector.model("Organization", organizationSchema);
