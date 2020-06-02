const { Cart, Product, Cart_Item } = require('models/index.js');

// // POST: crea el carrito
// server.post('/:cartID', createCart);
function createCart(req, res, next) {
  const { cartId } = req.params;

  return Cart.findByPk(cartId)
    .then(cart => {
      if (!cart) {
        return Cart.create({ id: cartId })
          .then(result => res.status(201).json(result))
      } else {
        res.status(200).json(cart);
      }
    })
    .catch(next);
};

// // GET: devuelve un arreglo con items del carrito
// server.get('/:cartID', getCart);
function getCart(req, res, next) {
  const { cartId } = req.params;
  return Cart.findOne({ where: { id: cartId } })
    .then(cart => res.json(cart))
    .catch(next);
};

// // PUT: agrega un producto al carrito
// server.post('/:productId', addProduct);
function addProduct(req, res, next) {
  const { cartId } = req.params;
  const { productId, quantity } = req.body;

  Product.findOne({ where: { id: productId } })
    .then(product => {
      product_id = product.id
    })

  Cart.findByPk(cartId)
    .then(c => {
      return Cart_Item.findOrCreate({ where: { cartId: cartId, productId: productId, quantity: quantity } })
        .then(result => res.status(201).json(result))
    })
    .catch(next)
}

// // PUT: para editar la cantidad de un producto
// server.put('/:cartId', editQuantity);
function editQuantity(req, res, next) {
  const { cartId } = req.params;
  const { productId, quantity } = req.body;

  // if (stock < quantity) {
  //   throw new Error('No hay suficiente stock de este producto');
  // }

  Cart_Item.findOne({
    where: { cartId },
  }).then(Item => {
    return Item.update(
      { quantity }, 
      { where: { productId } })
  })
    .then(editedQuantity => res.status(202).json(editedQuantity))
    .catch(next);
}

// // // DELETE '/:itemID': para eliminar un productos
// // server.delete('/:cartID', deleteItem);
// function deleteItem(req, res, next) {
//   const { cartId } = req.params;

//   Cart_Item.destroy({
//     where: { cartId },
//   }).then(result => res.status(204).json(result))
//     .catch(next);
// }

// // // DELETE '/' Vaciar: Elimina todos los items del carrito
// // server.delete('/:cartId', deleteAll);
// function deleteAll(req, res, next) {
//   const { id } = req.params;

//   // findAll() ??
//   Cart.destroy({
//     where: { id },
//   }, {
//     // entrar al array?
//   }).then(result => res.status(204).json(result))
//     .catch(next);
// }

module.exports = {
  createCart,
  getCart,
  addProduct,
  editQuantity,
  //deleteItem,
  //deleteAll
};
