import connector from "#models/databaseUtil";

const topicSchema = {
  title: { type: String, required: true },
};

const Topic = connector.model("topic", topicSchema);

async function create(title) {
  const topic = new Topic({
    title,
  });
  const topicDoc = await topic.save();
  return topicDoc;
}

async function read(filter, limit = 1) {
  const topicdata = await Topic.find(filter).limit(limit);
  return topicdata;
}

async function update(filter, updateObject) {
  const topic = await Topic.findOneAndUpdate(filter, updateObject, { new: true });
  return topic;
}

async function remove(filter) {
  const res = await Topic.findByIdAndDelete(filter);
  return res;
}

export default {
  create, read, remove, update,
};
