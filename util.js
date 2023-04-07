const jwt = require("jsonwebtoken");

exports.genrateToken = (data)=>{
    return jwt.sign(data, process.env.TOKEN_SECRET);
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