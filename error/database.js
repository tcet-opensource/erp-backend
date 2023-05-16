export class DataNotFound extends Error{
    constructor(message){
        super(message);
        this.name = "DataNotFound";
    }
}

export class UserDoesNotExist extends Error{
    constructor(){
        super("User Does not exist");
        this.name = "UserDoesNotExist";
    }
}

export class UpdateError extends Error{
    constructor(modelName){
        super(`unable to update ${modelName}`);
        this.name = "UpdateError";
    }
}

export class DataEntryError extends Error{
    constructor(modelName){
        super(`Error while creating new entry in ${modelName}`);
        this.name = "DataEntryError";
    }
}