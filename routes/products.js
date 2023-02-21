var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  //return a list of all products or of those that satisfy the query
  res.json([]);
});

router.post("/", function (req, res, next) {
  //save a new product to the db
  res.json("");
});

router.get("/:id", function (req, res, next) {
  //get a specific product of id :id

  res.json("");
});

router.put("/:id", function (req, res, next) {
  //alters a specific product of id :id
  res.json("");
});

router.delete("/:id", function (req, res, next) {
  //delete a specific product of id :id

  res.json("");
});

module.exports = router;
