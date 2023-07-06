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

export async function deleteInfrastructureById(infrastructureId) {
  const deleted =  await infrastructure.remove({ _id: infrastructureId });
  if (deleted){
    return deleted;
  }
  throw new databaseError.DataDeleteError("infrastructure");
  
}
