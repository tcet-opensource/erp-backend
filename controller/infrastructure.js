import { createInfrastructure, deleteInfrastructureById, infrastructureList } from "#services/infrastructure";
import { logger } from "#util";

async function addInfrastructure(req, res) {
  const {
    name, type, wing, floor, capacity,
  } = req.body;
  try {
    const newInfrastructure = await createInfrastructure(name, type, wing, floor, capacity);
    res.json({ res: `added user ${newInfrastructure.id}` });
  } catch (error) {
    logger.error("Error while inserting", error);
    res.status(500);
    res.json({ err: "Error while inserting in DB" });
  }
}

async function getInfrastructure(req, res) {
  const filter= req.query;
  const infralist = await infrastructureList(filter);
  res.json({ res: infralist });
}


async function deleteInfrastructure(req, res) {
  const { infrastructureId } = req.params;
  try {
    await deleteInfrastructureById(infrastructureId);

    res.json({ res: `Deleted infrastructure with ID ${infrastructureId}` });
  } catch (error) {
    logger.error("Error while deleting", error);
    res.status(500).json({ error: "Error while deleting from DB" });
  }
}
export default { addInfrastructure, deleteInfrastructure,  getInfrastructure};
