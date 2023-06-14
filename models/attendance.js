import connector from "./databaseUtil";
import Infrastructure from "./infrastructure";
connector.set("debug", true);

const attendanceSchema = {
  date: { type: Date, required: true },
  time: { type: String, required: true },
  class: Infrastructure,
};

const Attendance = connector.model("Attendance", attendanceSchema);

export default {
  Attendance,
};
