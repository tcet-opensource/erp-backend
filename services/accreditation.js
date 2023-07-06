import accreditation from "#models/accreditation";
import databaseError from "#error/database";

export async function addNewAccreditation(name, agencyName, dateofAccreditation, dateofExpiry) {
  const newAccreditation = await accreditation.create({
    name,
    agencyName,
    dateofAccreditation,
    dateofExpiry,
  });
  if (newAccreditation.name === name) {
    return newAccreditation;
  }
  throw new databaseError.DataEntryError("Accreditation");
}

export async function updateNewAccreditation(fliter, data) {
  const updateAccreditation = await accreditation.update(fliter, data);
  if (updateAccreditation) {
    return updateAccreditation;
  }
  throw new databaseError.DataEntryError("Accrediation");
}
