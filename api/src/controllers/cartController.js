const { Cart } = require('models/index.js');

// // POST: crea el carrito
// server.post('/', createCart);
function createCart(req, res, next) {
  const { idUser } = req.params;
  // busco a mi usuario con su primaryKey
  return User.findByPk(idUser)
    .then(value => {
      Cart.create({ id })
    })
    .then(result => res.status(201).json(result))
    .catch(next);
};

// // GET: devuelve un arreglo con items del carrito
// server.get('/', getCart);
function getCart(req, res, next) {
  const { id } = req.params;
  return Cart.findOne({
    where: {
      id,
    },
  }).then(cart => res.json(cart))
    .catch(next);
};

// // PUT: para editar la cantidad de un producto
// server.put('/', editQuantity);
function editQuantity(req, res, next) {
  const { id } = req.params;
  const { quantity } = req.body;

  if (quantity > req.body.stock) {
    throw new Error('No hay suficiente stock de este producto');
  }

  Cart.update({
    where: { id },
  }, {
    // find item and edit quantity
    // stock - quantity
  }).then(editedQuantity => res.status(202).json(editedQuantity))
    .catch(next);
}

// // DELETE '/:productID': para eliminar un productos
// server.delete('/:productID', deleteItem);
function deleteItem(req, res, next) {
  const { id } = req.params;

  Product.destroy({
    where: { id },
  }).then(result => res.status(204).json(result))
    .catch(next);
}

// // DELETE '/' Vaciar: Elimina todos los items del carrito
// server.delete('/vaciar', deleteAll);
function deleteAll(req, res, next) {
  const { id } = req.params;

  Cart.destroy({
    where: { id },
  }, {
    // entrar al array?
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
