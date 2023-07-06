import { createInfrastructure } from "#services/infrastructure";
import { infrastructurelist } from "#services/infrastructure";
import { logger } from "#util";
import { query } from "express";

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

async function getinfrastructure(req, res) {
  let search= req.query.search
  const infralist = await infrastructurelist();
  res.json({ res: infralist });
}


export default { addinfrastructure, getinfrastructure };
