import connector from "./databaseUtil";
import Infrastructure from "./infrastructure";

connector.set("debug", true);

const attendanceSchema = {
  date: { type: Date, required: true },
  time: { type: String, required: true },
  absentees: { type: Array },
  class: Infrastructure,
};

const Attendance = connector.model("Attendance", attendanceSchema);

async function create(date, time, absentees) {
  const attendance = new Attendance({
    date,
    time,
    absentees,
  });
  const newAttendence = await attendance.save();
  return newAttendence;
}

async function remove(filter) {
  const res = await Attendance.findOneAndDelete(filter);
  return res;
}

async function grantAttendance(roll, date) {
  const res = await Attendance.findOneAndUpdate(date, {$pull: { absentees: roll } }, { new: true });
  return res;
}

export default {
  create, remove, grantAttendance,
};