const { Schema, default: mongoose } = require('mongoose');
const {connector} = require('./databaseUtil');

const studentEducationSchema = new Schema({
    personal_info: {
        name: { type: String, required: true },
        emailId: { type: String, unique: true, required: true },
        gender: { type: String, required: true },
        password: { type: String, required: true },
    },
    //tenth_details
    tenth: {
        marks: { type: String, required: true },
        percentage: { type: Number, required: true },
        seat_number: { type: String, required: true },
        exam_name: { type: String, required: true },
        exam_board: { type: String, required: true },
        ms_oms: { type: String, required: true },
        merit_number_in_qualifying_exam: { type: String, required: true },
        admitted_number: { type: String, required: true },
    },
    cet_hsc_details: {
        cet_roll_no: { type: String, required: true },
        cet_marks: { type: String, required: true },
        qualifying_exam_for_admission: { type: String, required: true },
        std_type: { type: String, required: true },
        stream_opted: { type: String, required: true },
        medium_of_instruction: { type: String, required: true },
        agg_total_marks: { type: Number, required: true },
        total_marks_out_of: { type: Number, required: true },
        percent_of_marks: { type: String, required: true },
        attempt_no: { type: String, required: true },
        passing_month: { type: String, required: true },
        passing_year: { type: String, required: true },
        institution_name: { type: String, required: true },
        educ_board_name:{type:String,required:true},
        pcm_percent:{type:String,required:true},
        pbm_percent:{type:String,required:true},
        stu_qualifying_exam:{type:String,required:true},  
        marks_obtained:{type:String,required:true},   
        state_rank:{type:String,required:true},
        prev_exam_seat_number:{type:String,required:false},
        prev_tc_number:{type:String,required:false},
        hsc_passed_school_name:{type:String,required:true},
        board_pattern:{type:String,required:true},
        scholarship_name:{type:String,required:false},
        scholarship_type:{type:String,required:false},
        dte_seat_type:{type:String,required:true},
        dte_user_password:{type:String,required:true},
        dte_user_id:{type:String,required:true},
    },
    graduation_details: {
        graduation_institute:{type:String,required:true},
        graduation_branch:{type:String,required:true},
        graduation_degree:{type:String,required:true},
        graduation_marks_pct:{type:Number,required:true},
        graduations_passing_year:{type:String,required:true},
        urban_rural:{type:String,required:true},
        scholarship_number:{type:String,required:false},
        last_school_college_attended:{type:String,required:true},
    }
})
const studentEducation = new connector.model('std-edu',studentEducationSchema);
module.exports={};