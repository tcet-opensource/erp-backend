const { connector } = require("./databaseUtil");

const eventSchema = new connector.Schema({
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
    infra: { type: String, required: true },
    budget: { type: Number, required: true },
    docs: [{ type: String }],
});

const Event = connector.model('Event', eventSchema);

module.exports = Event;