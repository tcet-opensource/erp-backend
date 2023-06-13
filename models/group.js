const { connector } = require("./databaseUtil");

const group = {
    groupName: { type: String, required: true },
    student_ids: { type: Array, required: true }, //array of number
}

const Group = new connector.model('group', group);

module.exports = {};