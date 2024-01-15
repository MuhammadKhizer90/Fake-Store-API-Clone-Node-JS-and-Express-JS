const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

module.exports = {
  createUser: async function (body) {
      try {
        const saltRounds = 10;
        body.password = await bcrypt.hash(body.password, saltRounds);
        const response = await userModel.createUser(body);
        if (response) {
          return response
        }else{
          return "no user created"
        }
      } catch (error) {
        return error;
      }
    },
  };