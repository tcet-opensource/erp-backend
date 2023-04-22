const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

exports.genrateToken = (data)=>{
    return jwt.sign(data, process.env.TOKEN_SECRET);
} 

exports.sendOTP = async (to, otp)=>{
	let info = await transporter.sendMail({
		from: "erptcet@tcetmumbai.in",
		to: to,
		subject: "OTP verification for TCET ERP system",
		text: `OTP for ERP system is ${otp}.`,
	})
	console.log(info.messageId)
}

/**
 * 
 * @param {*} data any data that you want as return from the function after mentioned time
 * @param {number} time in ms 
 * @returns Promise
 * 
 * Call is either with chaining or async await 
 * 
 * ()=>{asyncPlaceholder("hello", 1000).then(res=>console.log(res))}
 * 
 * async ()=>{let res = await asyncPlaceholder("hello", 1000); console.log(res)}
 */
exports.asyncPlaceholders = (data, time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(data), time);
    })
}


/**
 * corn job
 * var cron = require('node-cron');
 * cron.schedule('* * * * *', () => {
 *      console.log('running a task every minute');
 * });
 */
