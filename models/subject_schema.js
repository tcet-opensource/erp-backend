const { connector } = require("./databaseUtil");
// const { Module } = require("./module_schema");

const subjectContentSchema = {
    courseCode: {type: String, required: true},
    courseName: {type: String, required: true},
    totalCredit: {type: Number, required: true},
    duration: {type: Number, required: true},
    subID: {type: String, required: true},
    subName: {type:String, required: true},
    semester: {type: String, required: true},
    ltpCredDist: {type: [Number], required: true},
    subType: {type: String},                // can be open, professional, or core
    prerequisites: {type: String,  required: true},
    courseObjective:{type: String,  required: true}, 

// courseOutcome : [{courseOutcome: str, RBTLevel: str}]        # this is the modules from syllabus

// modules: Module[]

    reccTextbooks: {type: [String], required: true},
    refBooks: {type: [String], required: true},
    evalScheme: {type: String[Number], required: true}, 
    maxMarks: {type: Number, required: true}

// practicals: Practical[]
};  

const subjectContent = new connector.model("subject content", subjectContentSchema);
module.exports = {};