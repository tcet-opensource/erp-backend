import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

import dotenv from "dotenv"
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const genrateToken = (data) => jwt.sign(data, process.env.TOKEN_SECRET);

const sendOTP = async (to, otp) => {
  const info = await transporter.sendMail({
    from: "erptcet@tcetmumbai.in",
    to,
    subject: "OTP verification for TCET ERP system",
    text: `OTP for ERP system is ${otp}.`,
  });
};

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
const asyncPlaceholders = (data, time) => new Promise((resolve) => {
  setTimeout(() => resolve(data), time);
});

/**
 * corn job
 * var cron = require('node-cron');
 * cron.schedule('* * * * *', () => {
 *      console.log('running a task every minute');
 * });
 */

export default {genrateToken, sendOTP, asyncPlaceholders}