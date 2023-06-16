import connector from "#models/databaseUtil";

const accreditationSchema = {
    uid :{type : String, unique: true , required: true},
    accreditationName: {type: String,   required: true}, 
    agencyName: {type: String,  required: true},
    dateofAccreditation: {type: Date,   required: true},
    dateofExpiry: {type: Date, required: true}
};

const AccreditationModel = new connector.model('Accreditation', accreditationSchema);

export default AccreditationModel;