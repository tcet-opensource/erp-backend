export class UpdateError extends Error {
  constructor(modelName) {
    super(`unable to update ${modelName}`);
    this.name = "UpdateError";
  }
}
