import { createInfrastructure } from "#services/infrastructure";
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

export default { addinfrastructure };
