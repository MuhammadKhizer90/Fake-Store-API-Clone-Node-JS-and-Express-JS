const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const database = require("../../bin/dbConnection");

class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique:true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { sequelize, timestamps: true, paranoid: true, modelName: "User" }
);

module.exports = User;