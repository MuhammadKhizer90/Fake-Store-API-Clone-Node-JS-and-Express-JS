const { models } = require("./index");
module.exports = {
  createProducts: async function (body) {
    try {
      return await models.Products.create({ ...body });
    } catch (error) {
      return error;
    }
  },

  getAllProducts: async function () {
    try {
      return await models.Products.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
    } catch (error) {
      return error;
    }
  },
  
  getProductById: async function (id) {
    try {
      return await models.Products.findOne({
        where: {
          id: id,
        },
        attributes: {
          exclude: ["updatedAt","deletedAt"],
        },
      });
    } catch (error) {
      return error;
    }
  },


  updateProduct: async (body) => {
  try {
    return await models.Products.update(
      { ...body },
      {
        where: {
          id: body.id,
        },
      }
    );
  } catch (error) {
    return error;
  }
},

deleteProduct: async (id) => {
  try {
    return await models.Products.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return error;
  }
},
};
