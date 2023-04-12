import { connector } from './databaseUtil';

const studentMedicalSchema=({
    bloodGroup:{type:String, required:true},
    pastMedicalHistory:{type:String, required:true},
    immunisationHistory:{type:String, required:true},
    chronicMedicalConditions:{type:String, required:true},
    parentsEmailId:{type:String, required:true},
    parentsContact:{type:String, required:true},
    relativeContacts:{type:String, required:true},
})
const medicalHistory=new connector.model('stu-med',studentMedicalSchema);
module.exports={};