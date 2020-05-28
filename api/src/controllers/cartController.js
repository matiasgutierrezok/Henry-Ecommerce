const { cart } = require('models/index.js');
// El usuario agrega uno o más productos al carrito, lo cual crea un carrito. Condicional: la cantidad agregada debe ser menor o igual al stock disponible

function createCart(req, res, next) {
  // Si el usuario agrega productos al carrito, traigo esos datos
  const { idUser, idCart } = req.body;
  return Cart.create({
    idUser,
    idCart
  }).then(result => res.status(201).json(result))
    .catch(next);
}
 const cartPrueba = ["zapatilla", "Cantidad:1", "$500", "Disponibles: 99",];

function getCart(req, res, next) {
  return cartPrueba = []
    .then(products => res.json(cartPrueba))
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

function editQuantity(req, res, next) {
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

function deleteItem(req, res, next) {
  const { id } = req.params;

  Product.destroy({
    where: { id },
  }).then(result => res.status(204).json(result))
    .catch(next);
}

function deleteAll(req, res, next) {
  const { id } = req.params;

  Product.destroy({
    where: { id },
  }).then(result => res.status(204).json(result))
    .catch(next);
}

module.exports = {
  createCart,
  getCart,
  editQuantity,
  deleteItem,
  deleteAll
};
