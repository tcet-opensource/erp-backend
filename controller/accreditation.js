import { addNewAccreditation, deleteAccreditationById, updateAccreditationById } from "#services/accreditation";
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
async function deleteAccreditation(req, res) {
  const { accredationId } = req.params;
  try {
    await deleteAccreditationById(accredationId);
    res.json({ res: "Accreditation deleted successfully" });
  } catch (error) {
    logger.error("Error while deleting", error);
    res.status(500);
    res.json({ err: "Error while deleting from DB" });
  }
}

async function updateAccreditation(req, res) {
  const {
    id, ...data
  } = req.body;

  try {
    await updateAccreditationById(id, data);
    res.json({ res: "accreditation updated" });
  } catch (error) {
    logger.error("Error while inserting", error);
    res.status(500);
    res.json({ err: "Error while inserting in DB" });
  }
}
export default { addAccreditation, updateAccreditation, deleteAccreditation };
