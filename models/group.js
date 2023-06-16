const connector = require("#models/databaseUtil");

const groupSchema = {
    groupName: { type: String, required: true },
    studentIds: { type: [Number], required: true },
};

const groupModel = new connector.model("group", groupSchema);

async function createGroup(groupData) {
    try {
        const newGroup = await groupModel.create(groupData);
        return newGroup;
    } catch (error) {
        console.error("Error creating group:", error);
        return null;
    }
}

async function getGroupById(groupId) {
    try {
        const group = await groupModel.findById(groupId);
        return group;
    } catch (error) {
        console.error("Error retrieving group:", error);
        return null;
    }
}

async function updateGroup(groupId, updateData) {
    try {
        const updatedGroup = await groupModel.findByIdAndUpdate(groupId, updateData, { new: true });
        return updatedGroup;
    } catch (error) {
        console.error("Error updating group:", error);
        return null;
    }
}

async function deleteGroup(groupId) {
    try {
        const deletedGroup = await groupModel.findByIdAndDelete(groupId);
        return deletedGroup;
    } catch (error) {
        console.error("Error deleting group:", error);
        return null;
    }
}

module.exports = {
    createGroup,
    getGroupById,
    updateGroup,
    deleteGroup,
};