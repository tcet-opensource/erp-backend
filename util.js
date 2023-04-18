const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
exports.genrateToken = (data)=>{
    return jwt.sign(data, process.env.TOKEN_SECRET);
} 

exports.hashPassword = async(password) =>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        return hashedPassword;
    } catch (error) {
        return error.message;
    }
}

exports.comparePasswords = async(userPassword,storedPassword) =>{
    try {
        bcrypt.compare(userPassword,storedPassword,(err,success)=>{
            if(err) throw Error();
            if(success){
                return true;
            }
            else return false;
        })
    } catch (error) {
        return error.message;
    }
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