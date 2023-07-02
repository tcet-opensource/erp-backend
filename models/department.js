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
