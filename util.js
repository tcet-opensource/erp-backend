const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const algorithm = 'aes-256-cbc';

exports.generateToken = (data, IP)=>{
    const encryptedIP = this.encrypt(IP);
    return jwt.sign({data: data, ip: encryptedIP}, process.env.TOKEN_SECRET);
}

exports.encrypt = (IP) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(IP, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

exports.decrypt = (IP) => {
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(IP, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
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