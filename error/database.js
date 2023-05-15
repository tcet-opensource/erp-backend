export class DataNotFound extends Error{
    constructor(message){
        super(message);
        this.name = "DataNotFound";
    }
}