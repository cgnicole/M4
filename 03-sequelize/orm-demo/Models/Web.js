const { DataTypes } = require("sequelize");

const Web = (sequelize) => {
  sequelize.define("Web", {
    // Cambiado a "Album" en lugar de "Band"
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Web;
