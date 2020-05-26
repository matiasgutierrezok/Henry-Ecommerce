const { Product } = require('models/index.js');

function getProducts(req, res, next) {
  return Product.findAll()
    .then(products => res.json(products))
    .catch(next);
}

function getOneProduct(req, res, next) {
  // Producto de ID especifico
  const { id } = req.params;

  return Product.findOne({
    where: {
      // id de busqueda
      id,
    },
  }).then(product => res.json(product))
    .catch(next);
}

function createProduct(req, res, next) {
  // Si el usuario esta registrado y crea el producto me traigo estos datos
  const { title, description, price, stock, picture } = req.body;
  return Product.create({
    title,
    description,
    price,
    stock,
    picture
  }).then(result => res.status(201).json(result))
    .catch(next);
}

function editProduct(req, res, next) {
  const { id } = req.params;
  const { title, description, stock, price, picture } = req.body;

  if (!req.body.id) {
    throw new Error('Producto no encontrado.');
  }

  Product.update({
    where: { id },
  }, {
    title,
    description,
    stock,
    price,
    picture
  }).then(editedProduct => res.status(202).json(editedProduct))
    .catch(next);
}

function deleteProduct(req, res, next) {
  const { id } = req.params;

  Product.destroy({
    where: { id },
  }).then(result => res.status(204).json(result))
    .catch(next);
}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct
};
