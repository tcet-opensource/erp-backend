import infrastructure from "#models/infrastructure";
import { createInfrastructure, updateinfrastructure } from "#services/infrastructure";
import { logger } from "#util";

async function addinfrastructure(req, res) {
  const {
    name, type, wing, floor, capacity,
  } = req.body;
  try {
    const newinfrastructure = await createInfrastructure(name, type, wing, floor, capacity);
    res.json({ res: `added user ${newinfrastructure.id}` });
  } catch (error) {
    logger.error("Error while inserting", error);
    res.status(500);
    res.json({ err: "Error while inserting in DB" });
  }
}

async function updateinfrastructure(req,res){
  const{
    name , type, wing, floor, capacity
  }= req.body;
  try{
    const updateinfrastructure=await updateinfrastructure(filter,data);
    res.json({res:  `updated infrastructure ${updateinfrastructure.id}`});
    }catch(error){
      logger.error("Error while updating",error);
      res.status(500);
      res.json({err:"Error while updaing in DB"});
    }
  }
export default { addinfrastructure,updateinfrastructure };
