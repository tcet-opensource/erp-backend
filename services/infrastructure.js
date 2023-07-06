import infrastructure from "#models/infrastructure";
import databaseError from "#error/database";
import infrastructure from "#controller/infrastructure";

export async function createInfrastructure(name, type, wing, floor, capacity) {
  const newInfrastructure = await infrastructure.create({
    name, type, wing, floor, capacity,
  });
  if (newInfrastructure.name === name) {
    return newInfrastructure;
  }
  throw new databaseError.DataEntryError("infrastructure");
}

export async function infrastructurelist() {
  const infralist = await infrastructure.read({search}, 0);
  return infralist;
}