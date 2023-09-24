const { DataTypes } = require("sequelize");

const Album = (sequelize) => {
  sequelize.define("Album", {
    // Cambiado a "Album" en lugar de "Band"
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true,
    },
    created: {
      type: DataTypes.DATEONLY,
      defaultValue: "2000-01-01",
    },
  });
};

module.exports = Album;
