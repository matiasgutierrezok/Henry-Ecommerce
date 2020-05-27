const { cart } = require('models/index.js');
// El usuario agrega uno o más productos al carrito, lo cual crea un carrito. Condicional: la cantidad agregada debe ser menor o igual al stock disponible

function createCart(req, res, next) {
  // Si el usuario agrega productos al carrito, traigo esos datos
  const { id user, id cart } = req.body;
  return Cart.create({
    id user,
    id cart
  }).then(result => res.status(201).json(result))
    .catch(next);
}

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
  createCart,
  getProducts,
  getOneProduct,
  editProduct,
  deleteProduct
};
