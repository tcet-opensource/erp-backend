const {connector} = require('./databaseUtil');

const accreditationSchema = {
    uid :{type : String, unique: true , required: true},
    accreditationName: {type: String,   required: true}, 
    agencyName: {type: String,  required: true},
    dateofAccreditation: {type: Date,   required: true},
    dateofExpiry: {type: Date, required: true}
  
}

const AccreditationSchema = new connector.model('Accreditation_schema', accreditationSchema);
 
module.exports = {};