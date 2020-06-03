const { Cart, Product, Cart_Item } = require('models/index.js');

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

function getCart(req, res, next) {
  const { cartId } = req.params;
  return Cart_Item.findAll({ where: { cartId: cartId } })
    .then(cart => res.json(cart))
    .catch(next);
};

//Busca todos los productos vinculados al cartId dentro de la tabla Cart_Item

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

function editQuantity(req, res, next) {
  const { cartId } = req.params;
  const { productId, quantity } = req.body;

  return Cart_Item.update({ 
    quantity
  },{
    where: { cartId, productId }   
  }).then(editedQuantity =>
    res.status(202).json("Cambios realizados exitosamente"))
    .catch(next);
}

function deleteItem(req, res, next) {
  const { cartId } = req.params;
  const { productId } = req.body;

  return Cart_Item.destroy({
    where: { cartId, productId }
  },{
    productId
  }).then(deletedItem =>
    res.status(202).json(deletedItem))
    .catch(next);
}

function deleteAll(req, res, next) {
  const { cartId } = req.params;

  return Cart_Item.destroy({
    where: { cartId }
  }).then(deletedAll =>
    res.status(202).json("Carrito vaciado correctamente"))
    .catch(next);
}

module.exports = {
  createCart,
  getCart,
  addProduct,
  editQuantity,
  deleteItem,
  deleteAll
};

