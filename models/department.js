import connector from '#models/databaseUtil';

const departmentSchema = {
  name: { type: Number, required: true },
  acronym: { type: String, required: true, immutable: true },
  yearOfStarting: { type: Date, immutable: true, required: true },
  accreditations: [{
    type: connector.Schema.Types.ObjectId,
    ref: 'Accreditation',
    required: true,
  }],
  infrastructures: [{
    type: connector.Schema.Types.ObjectId,
    ref: 'Infrastructure',
    required: true,
  }],
};

const Department = connector.model('Department', departmentSchema);

//for creating
async function create(
  name,
  acronym,
  yearOfStarting,
  accreditions,
  infrastructures
){
    const department = new Department({
     name,
     acronym,
     yearOfStarting,
     accreditions,
     infrastructures
    });
  const departmentDoc = await department.save();
  return departmentDoc;
  }

  async function read(filter, limit = 1) {
    const departmentData = await Department.find(filter).limit(limit);
    return departmentData;
  }

  async function update(filter, updateObject) {
    const department = await Department.findOneAndUpdate(filter, updateObject, {
      new: true,
    });
    return department;
  }

  async function remove(filter) {
    const res = await Department.findOneAndDelete(filter);
    return res;
  }
  
  export default {
    create,
    read,
    update,
    remove,
  };  