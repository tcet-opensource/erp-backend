const mongoose = require('mongoose');
require("dotenv").config();
mongoose.set('strictQuery', true);
mongoose.connect(`${process.env.DB_URL}`);
module.exports = { connector:mongoose };
