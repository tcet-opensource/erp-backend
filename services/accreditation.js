import accreditation from "#models/accreditation";
import databaseError from "#error/database";
import { logger } from "#util";
import database from "#error/database";
import router from "#routes/index";

export async function addNewAccreditation(name, agencyName, dateofAccreditation, dateofExpiry) {
  const newAccreditation = await accreditation.create(
    name,
    agencyName,
    dateofAccreditation,
    dateofExpiry,
  );
  if (newAccreditation.name === name) {
    return newAccreditation;
  }
  throw new databaseError.DataEntryError("Accreditation");
}

export async function deleteAccreditationById(accreditationID){
  const result = await router.delete('/accreditations/:accreditationID', (req, res) => {
    const { accreditationID } = req.params;
  });}
export default {
  deleteAccreditationById, addNewAccreditation
}