import Accreditation from "#models/accreditation";
import databaseError from "#error/database";

export async function addNewAccreditation(name, agencyName, dateofAccreditation, dateofExpiry) {
  const newAccreditation = await Accreditation.create({
    name,
    agencyName,
    dateofAccreditation,
    dateofExpiry,
  });
  if (newAccreditation.name === name) {
    return newAccreditation;
  }
  throw new databaseError.DataEntryError("Add Accreditation");
}

export async function getAccreditation(filter) {
  const accreditation = await Accreditation.read({ name: filter });
  if (accreditation) {
    return accreditation;
  }
  throw new databaseError.DataNotFoundError("Get Accreditation");
}
