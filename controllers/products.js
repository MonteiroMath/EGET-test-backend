const Products = require("../models/products");

const getProducts = (req, res, next) => {
  //return a list of all products or of those that satisfy the query

  Products.findAll().then((products) => res.json({ success: true, products }));
};

const createProduct = (req, res, next) => {
  const { name, category, description, price, quantity } = req.body;

  if (!name || !category || !description || !price || !quantity)
    throw new Error("Invalid request - Product data must be informed");

  Products.create({ name, category, description, price, quantity })
    .then((product) => res.json({ success: true, product }))
    .catch(next);
};

const getProduct = (req, res) => {
  let { id } = req.params;

  Products.findByPk(id).then((product) => {
    res.json({
      success: true,
      product,
    });
  });
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
};
