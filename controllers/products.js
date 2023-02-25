const { Op } = require("sequelize");
const Products = require("../models/products");

const getProducts = (req, res, next) => {
  //return a list of all products or of those that satisfy the query
  const query = req.query;
  console.log(query);

  if (query.searchTerm) {
    next();
  }

  Products.findAll()
    .then((products) => res.json({ success: true, products }))
    .catch(next);
};

const getProductsByQuery = (req, res, next) => {
  //return a list of all products or of those that satisfy the query
  const query = req.query;

  if (!query.searchTerm) {
    next();
  }

  Products.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.substring]: query.searchTerm } },
        { category: { [Op.substring]: query.searchTerm } },
      ],
    },
  })
    .then((products) => res.json({ success: true, products }))
    .catch(next);
};

const createProduct = (req, res, next) => {
  const { name, category, description, price, quantity } = req.body;

  if (!name || !category || !description || !price || !quantity)
    throw new Error("Invalid request - Product data must be informed");

  Products.create({ name, category, description, price, quantity })
    .then((product) => res.json({ success: true, product }))
    .catch(next);
};

const getProduct = (req, res, next) => {
  const { id } = req.params;

  Products.findByPk(id)
    .then((product) => {
      if (!product) throw new Error(`Product id ${id} not found`);

      res.json({
        success: true,
        product,
      });
    })
    .catch(next);
};

const updateProduct = (req, res, next) => {
  const { id } = req.params;
  const { name, category, description, price, quantity } = req.body;

  Products.findByPk(id)
    .then((product) => {
      product.set({ name, category, description, quantity, price });

      return product.save();
    })
    .then((product) => res.json({ success: true, product }))
    .catch(next);
};

const deleteProduct = (req, res, next) => {
  const { id } = req.params;

  Products.findByPk(id)
    .then((product) => product.destroy())
    .then(res.json({ success: true }))
    .catch(next);
};

module.exports = {
  getProducts,
  getProductsByQuery,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
