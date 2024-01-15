const productModel = require("../models/productModel");


module.exports = {
  createProducts: async function (body) {
    try {
      const response = await productModel.createProducts(body);
      if (response) {
        return response
      }else{
        return "no Product created"
      }
    } catch (error) {
      return error;
    }
  },

  getAllProducts: async function () {
    try {
     
      const response = await productModel.getAllProducts();
      if (response) {
        return response;
      }
      return "No Data Exists";
    } catch (error) {
      return error;
    }
  },

  updateProduct: async (body) => {
    try {
      const user = await productModel.getProductById(body.id);
      if (!user) {
        return "no user exists";
      }

      const response = await productModel.updateProduct(body);
      if (response) {
        return response;
      }
      return "unable to update";
    } catch (error) {
      return error;
    }
  },

  deleteProduct: async (id) => {
    try {
      const user = await productModel.getProductById(id);
      if (!user) {
        return "no user exist";
      }

      const response = await productModel.deleteProduct(id);
      if (response) {
        return response;
      }
      return "unable to delete";
    } catch (error) {
      return error;
    }
  },
};
