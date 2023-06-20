import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.DB_URL}`);
const connector = mongoose;
export default connector;
