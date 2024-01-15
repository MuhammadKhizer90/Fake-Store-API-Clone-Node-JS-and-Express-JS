const { STRING } = require("sequelize");
const sequelize = require("../bin/dbConnection");

//importing models

const {
  Products,
  User,
} = require("./definitions/index");

//models array
const models = {Products,User};

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
