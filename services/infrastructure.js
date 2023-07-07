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

export async function updateInfrastructure(filter,data){
  const updateInfrastructure = await infrastructure.update({filter,data
 });
  if(updateInfrastructure.name === name){
    return updateInfrastructure;
  }
throw new databaseError.DataEntryError("Infrastructure");
}