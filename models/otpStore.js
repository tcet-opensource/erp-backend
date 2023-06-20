import connector from "#models/databaseUtil";
const {Schema}=connector;

const otpStoreSchema=new Schema({
    otpID:{type:String,unique:true,required:true},
    otp:{type:String,required:true,unique:true}  
})

const OTPStore=connector.model("OTPStore",otpStoreSchema)

