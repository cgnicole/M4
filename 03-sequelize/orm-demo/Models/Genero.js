const { DataTypes } = require("sequelize");

const Genero = (sequelize) => {
  sequelize.define("Genero", {
    // Cambiado a "Album" en lugar de "Band"
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};

module.exports = Genero;
