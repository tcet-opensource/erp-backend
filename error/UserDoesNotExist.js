export class UserDoesNotExistError extends Error {
  constructor() {
    super("User Does not exist");
    this.name = "UserDoesNotExist";
  }
}
