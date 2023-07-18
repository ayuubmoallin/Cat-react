const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { DATABASE_CONNECTION } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_CONNECTION, {
  dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   },
});

module.exports = {
  sequelize,
};
