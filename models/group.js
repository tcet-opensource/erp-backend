import connector from "#models/databaseUtil";

const groupSchema = {
  title: { type: String, required: true },
  student: { type: connector.Schema.Types.ObjectId, ref: "Student", required: true }
};


const groupModel = connector.model("group", groupSchema);

async function create(title,student) {
  try {
    const newGroup = await groupModel.create(title , student);
    return newGroup;
  } catch (error) {
    console.error("Error creating group:", error);
    return null;
  }
}

async function read(groupId) {
  try {
    const group = await groupModel.findById(groupId);
    return group;
  } catch (error) {
    console.error("Error retrieving group:", error);
    return null;
  }
}

async function update(groupId, updateData) {
  try {
    const updatedGroup = await groupModel.findByIdAndUpdate(groupId, updateData, { new: true });
    return updatedGroup;
  } catch (error) {
    console.error("Error updating group:", error);
    return null;
  }
}
async function remove(groupId) {
  try {
    const deletedGroup = await groupModel.findByIdAndDelete(groupId);
    return deletedGroup;
  } catch (error) {
    console.error("Error deleting group:", error);
    return null;
  }
}


export default {
  create,
  read,
  update,
  remove,
};
