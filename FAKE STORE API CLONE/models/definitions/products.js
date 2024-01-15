const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../bin/dbConnection");
const database = require("../../bin/dbConnection");

class Products extends Model {}

Products.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    Category: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.STRING,
    },
   
  },
  { sequelize, timestamps: true, paranoid: true, modelName: "Products" }
);

module.exports = Products;
