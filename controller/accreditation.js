import { addNewAccreditation, updateNewAccreditation } from "#services/accreditation";
import { logger } from "#util";

async function addAccreditation(req, res) {
  const {
    name, agencyName, dateofAccreditation, dateofExpiry,
  } = req.body;
  try {
    // eslint-disable-next-line max-len
    const accreditation = await addNewAccreditation(name, agencyName, dateofAccreditation, dateofExpiry);
    res.json({ res: `added accreditation ${accreditation.name}` });
  } catch (error) {
    logger.error("Error while inserting", error);
    res.status(500);
    res.json({ err: "Error while inserting in DB" });
  }
}

async function updateAccreditation(req, res) {
  const {
    id, ...data
  } = req.body;
  const filter = { id };

  try {
    await updateNewAccreditation(filter, data);
    res.json({ res: "accreditation updated" });
  } catch (error) {
    logger.error("Error while inserting", error);
    res.status(500);
    res.json({ err: "Error while inserting in DB" });
  }
}
export default { addAccreditation, updateAccreditation };
