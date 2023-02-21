var express = require("express");
var router = express.Router();

const {
  getProducts,
  createProduct,
  getProduct,
} = require("../controllers/products");

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getProduct);

router.put("/:id", function (req, res, next) {
  //alters a specific product of id :id
  res.json("");
});

router.delete("/:id", function (req, res, next) {
  //deletels a specific product of id :id

  res.json("");
});

module.exports = router;
