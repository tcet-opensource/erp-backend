const mongoose = require('mongoose');
require("dotenv").config();

mongoose.set('strictQuery', true);
// let DB_URL="mongodb://localhost:27017/new_data"
mongoose.connect(`${process.env.DB_URL}`);


module.exports = { connector:mongoose };
