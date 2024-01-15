const router = require("express").Router();

const productController = require("../controllers/productController");

router.post("/createProducts", productController.createProducts);
router.get("/getAllProducts",productController.getAllProducts);
router.put("/updateProduct", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);
module.exports = router;
