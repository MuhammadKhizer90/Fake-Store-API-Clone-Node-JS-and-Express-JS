const ProductService = require("../services/productService");
const joi = require("joi");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const createProductSchema = joi.object({
  title: joi.string().required(),
  Category: joi.string().required(),
  image: joi.string().required(),
  description: joi.string().required(),
  rating: joi.string().required(),
  price: joi.string().required(),
});
const productIdSchema = joi.object({
  id: joi.number().required(),
});

const updateProductSchema = joi.object({
  id:joi.number().required(),
  title: joi.string().required(),
  Category: joi.string().required(),
  image: joi.string().required(),
  description: joi.string().required(),
  rating: joi.string().required(),
  price: joi.string().required(),
});


module.exports = {
  createProducts: async function (req, res) {
    try {
    console.log(req.body)
      const validate = await createProductSchema.validateAsync(req.body);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await ProductService.createProducts(validate);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: ReasonPhrases.OK,
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
    }
  },

  getAllProducts: async function (req, res) {
    try {
      const response = await ProductService.getAllProducts();
      if (response.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: response.error,
        });
      } else{
        res.status(StatusCodes.OK).send({
          data: { response },
          message: ReasonPhrases.OK,
          error: {},
        });
      }
     
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: ReasonPhrases.NOT_FOUND,
        error: error,
      });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const validate = await updateProductSchema.validateAsync(req.body);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await ProductService.updateProduct(validate);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: "updated",
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: "unable to update",
        error: error,
      });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const validate = await productIdSchema.validateAsync(req.query);
      if (validate.error) {
        res.status(StatusCodes.BAD_REQUEST).send({
          data: {},
          message: ReasonPhrases.BAD_REQUEST,
          error: validate.error,
        });
      }
      const response = await ProductService.deleteProduct(validate.id);
      res.status(StatusCodes.OK).send({
        data: { response },
        message: "deleted successfully",
        error: {},
      });
    } catch (error) {
      res.status(StatusCodes.NOT_FOUND).send({
        data: {},
        message: "unable to delete",
        error: error,
      });
    }
  },

};
