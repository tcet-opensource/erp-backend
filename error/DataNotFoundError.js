export class DataNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataNotFound";
  }
}
