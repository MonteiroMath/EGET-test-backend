var express = require("express");
var router = express.Router();

const {
  getProducts,
  getProductsByQuery,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.get("/", getProductsByQuery, getProducts);

router.post("/", createProduct);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
