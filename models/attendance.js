import connector from "./databaseUtil";

connector.set("debug", true);

const attendanceSchema = {
  student: { type: connector.Schema.Types.ObjectId, ref: "Student", required: "true" },
  course: { type: connector.Schema.Types.ObjectId, ref: "Course", required: "true" },
  monthlyAttended: { type: Number, default: 0 },
  monthlyOccured: { type: Number, default: 0 },
  cumulativeAttended: { type: Number, default: 0 },
  cumulativeOccured: { type: Number, default: 0 },
};

const Attendance = connector.model("Attendance", attendanceSchema);

async function create(studentId, courseId) {
  try {
    const attendance = new Attendance({
      student: studentId,
      course: courseId,
    });
    const createAttendance = await attendance.save();
    return createAttendance;
  } catch (error) {
    console.error("Error creating attendance:", error);
    return null;
  }
}

async function read(attendanceId) {
  try {
    const attendance = await Attendance.findById(attendanceId);
    return attendance;
  } catch (error) {
    console.error("error reading attendance", error);
    return null;
  }
}

async function update(attendanceId, updateData) {
  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      attendanceId,
      updateData,
      { new: true },
    );
    return updatedAttendance;
  } catch (error) {
    console.error("error updating attendance:", error);
    return null;
  }
}

async function remove(attendanceId) {
  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(attendanceId);
    return deletedAttendance;
  } catch (error) {
    console.error("error removing attendance", error);
    return null;
  }
}
export default {
  create, remove, update, read,
};
