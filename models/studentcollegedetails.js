import mongoose from "mongoose";
import { Schema } from "mongoose";

const CollegeSchema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  AdmissionYear: {
    type: String,
    required: true,
  },
  StudentCode: {
    type: String,
  },
  Rollno: {
    type: String,
  },
  AdmissionStatus: {
    type: String,
    required: true,
  },
  AdmissionPattern: {
    type: String,
  },
  Admissioncategory: {
    type: String,
    required: true,
  },
  SeatDesc: {
    type: String,
  },
  QuotaType: {
    type: String,
    required: true,
  },
  QuotaType: {
    type: String,
    required: true,
  },
  Boarder: {
    type: Boolean,
  },
  Seattype: {
    type: String,
    required: true,
  },
  Seatsubtype: {
    type: String,
    required: true,
  },
  EligibilityNo: {
    type: String,
    required: true,
  },
  EnrollmentNo: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("College", CollegeSchema);
