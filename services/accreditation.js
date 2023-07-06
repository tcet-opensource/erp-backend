import accreditation from "#models/accreditation";
import databaseError from "#error/database";

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

export async function deleteAccreditationById(accredationId){
  const deleted = await accreditation.remove({_id: accredationId});
  if (deleted) {
    return deleted
  }
  throw new databaseError.DataDeleteError("Accreditation");
}
export default {
  deleteAccreditationById, addNewAccreditation
}