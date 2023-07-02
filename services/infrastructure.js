import infrastructure from "#models/infrastructure";
import databaseError from "#error/database";

export async function createinfrastructure(name, type, wing, floor, capacity) {
  const newinfrastructure = await infrastructure.create(name, type, wing, floor, capacity);
  if (newinfrastructure.name === name) {
    return newinfrastructure;
  }
  throw new databaseError.DataEntryError("infrastructure");
}
