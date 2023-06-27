export class DataEntryError extends Error {
  constructor(modelName) {
    super(`Error while creating new entry in ${modelName}`);
    this.name = "DataEntryError";
  }
}
