const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Breed = sequelize.define("Breed", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Breed;
