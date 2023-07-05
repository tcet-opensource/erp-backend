import infrastructure from "#models/infrastructure";
import databaseError from "#error/database";

export async function createInfrastructure(name, type, wing, floor, capacity) {
  const newInfrastructure = await infrastructure.create({
    name, type, wing, floor, capacity,
  });
  if (newInfrastructure.name === name) {
    return newInfrastructure;
  }
  throw new databaseError.DataEntryError("infrastructure");
}

export async function deleteInfrastructure(documentID) {
  try {
    await infrastructure.findOneAndDelete({ _id: documentID });
  } catch (error) {
    // Handle any errors that occur during the deletion process
    throw new Error(`Error deleting infrastructure: ${error.message}`);
  }
}
