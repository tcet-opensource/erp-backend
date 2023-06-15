import connector from "#models/databaseUtil";

const facultyMetadataSchema={
    achievements: [{
      type: String,
      required: true,
    }],
    areaOfSpecialization: [{
      type: String,
      required: true,
    }],
    papersPublishedPG: {
      type: Number,
      required: true,
    },
    papersPublishedUG: {
      type: Number,
      required: true,
    },
  };

// eslint-disable-next-line  no-unused-vars
const facultyMetadataModel = ("Faculty Metadata",facultyMetadataSchema)