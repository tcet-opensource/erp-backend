import accreditationModel from "#models/accreditation";
import databaseError from "#error/database";

export async function addNewAccreditation(name, agencyName, dateofAccreditation, dateofExpiry) {
  const newAccreditation = await accreditationModel.create(
    name,
    agencyName,
    dateofAccreditation,
    dateofExpiry,
  );
  if (newAccreditation.name === name) {
    return newAccreditation;
  }
  throw new databaseError.DataEntryError("Add Accreditation");
}

export async function getAccreditation(filter) {
  const accreditation = await accreditationModel.read(filter);
  if (accreditation) {
    return accreditation;
  }
  throw new databaseError.DataNotFoundError("Get Accreditation");
}
