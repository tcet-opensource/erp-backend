import connector from "#models/databaseUtil";

const groupSchema = {
    groupName: { type: String, required: true },
    studentIds: { type: [Number], required: true }, //array of number
}

const groupModel = new connector.model('group', groupSchema);