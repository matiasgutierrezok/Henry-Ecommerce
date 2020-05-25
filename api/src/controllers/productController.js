const { Product } = require('models/Product.js')

console.log("Esto es Prod? " + {Product});

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
  const { name, description, stock, price, img, category } = req.body;
  return Product.create({
    name,
    description,
    stock,
    price,
    img,
    category,
  }).then(result => res.status(201).json(result))
    .catch(next);
}

function editProduct(req, res, next) {
  const { id } = req.params;
  const { name, description, stock, price, img, category } = req.body;

  if (!req.body.id) {
    throw new Error('Producto no encontrado.');
  }

  Product.update({
    where: { id },
  }, {
    name,
    description,
    stock,
    price,
    img,
    category,
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
