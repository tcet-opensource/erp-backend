import connector from "#models/databaseUtil";
import { logger } from "#util";

connector.set("debug", true);
const tutorialSchema = {
  no: { type: integer, required: true },
  Title: { type: String, unique: true, required: true },
  hours: { type: integer, required: true },
cognitiveLevel:{
  type:String,
  enum:['L1','L2','L3','L4','L5','L6'],
  default:'L1'
}
};

const tutorial= connector.model("tutorial", tutorialSchema);

export default{tutorial}


