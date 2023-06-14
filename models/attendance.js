import connector from "./databaseUtil";

connector.set("debug", true);

const attendanceSchema = {
  date: { type: Date, required: true },
  time: { type: String, required: true },
  class: { type: connector.Schema.Types.ObjectId, ref: "Infrastructure" },
};

const Attendance = connector.model("Attendance", attendanceSchema);
