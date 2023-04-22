import { connector } from './databaseUtil';

const studentMedicalSchema={
    bloodGroup:{type:String, required:true},
    pastMedicalHistory:{type:String, required:true},
    immunisationHistory:{type:String, required:true},
    chronicMedicalConditions:{type:String},
    parentsEmailId:{type:String, required:true},
    parentsContact:{type:Number, required:true},
    relativeContacts:{type:Number, required:true},
}
const medicalHistory=new connector.model('stu-med',studentMedicalSchema);
module.exports={};