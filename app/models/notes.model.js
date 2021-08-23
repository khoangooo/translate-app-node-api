import Sequelize from "sequelize";

const NotesModel = (sequelize) => {
  const Note = sequelize.define(
    "france_vocabulary",
    {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      guid: { type: Sequelize.STRING, allowNull: false },
      mid: { type: Sequelize.BIGINT, allowNull: false },
      mod: { type: Sequelize.BIGINT, allowNull: false },
      usn: { type: Sequelize.INTEGER, allowNull: false },
      tags: { type: Sequelize.STRING, allowNull: false },
      flds: { type: Sequelize.STRING, allowNull: false },
      sfld: { type: Sequelize.INTEGER, allowNull: false },
      csum: { type: Sequelize.BIGINT, allowNull: false },
      flags: { type: Sequelize.INTEGER, allowNull: false },
      data: { type: Sequelize.STRING, allowNull: false },
      translate: { type: Sequelize.STRING },
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // If don't want createdAt
      createdAt: false,

      // If don't want updatedAt
      updatedAt: false,
    }
  );
  return Note;
};

export default NotesModel;
