const { connector } = require("./databaseUtil");

const CollegeSchema = {
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
};

const College = new connector.model("College", CollegeSchema);

export const AddCollegeDetails = async (req, res) => {
  const id = req.body.id;
  const newCollegeDetails = new College({
    userId: id,
    ...req.body,
  });
  try {
    const data = await College.findById(id);
    if (data)
      return res.status(400).send("One user can have only one college details");

    await newCollegeDetails.save();
    res.status(201).send("user has been created");
  } catch (error) {
    console.log(error);
  }
};
export const GetCollegeDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await College.findById(id);
    if (!data)
      return res
        .status(400)
        .send("No data found for this id please add your data");

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateCollegeDetails = async (req, res) => {
  const id = req.body.id;
  try {
    const finddata = await College.findById(id);
    if (!finddata) res.status(404).send("No data found for this user");

    const data = await College.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export const deleteCollegeDetails = async (req, res) => {
  const id = req.body.id;
  try {
    const finddata = await College.findById(id);
    if (!finddata) res.status(404).send("No data found for this user");
    await College.findByIdAndDelete(req.params.id);
    res.status(200).send("details deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
