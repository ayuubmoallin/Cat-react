const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const Cat = sequelize.define("Cat", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_adopted: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  breed_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Breeds",
      key: "id",
    },
  },
});

module.exports = Cat;
