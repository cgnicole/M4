const { DataTypes } = require("sequelize");

const Band = (sequelize) => {
  sequelize.define("Band", {
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
    origin: {
      type: DataTypes.STRING,
      defaultValue: "unknow",
    },
  });
};
module.exports = Band;
