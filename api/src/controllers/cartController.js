const { Cart, Product, Cart_Item, User } = require('models/index.js');

function createCart(req, res, next) {
  const Id  = req.params.userId;

  console.log(Id);

  return User.findByPk(Id)
            .then(user => {
              return Cart.findOne({ where: { userId: user.id, state: 'created' } })
                .then(cart => {
                  if (!cart) {
                    return Cart.create({ userId: Id })
                      .then(result => res.status(201).json(result))
                  } else {
                    res.status(200).json(cart);
                  }
                })
            }).catch(next);     
};



function getCart(req, res, next) {
  const userId = req.params.userId;

  return Cart_Item.findAll({ where: { cartId: cartId } })
    .then(cart => res.json(cart))
    .catch(next);
};



function addProduct(req, res, next) {
  const Id = req.params.userId;
  const { productId, quantity } = req.body;
  Product.findOne({ where: { id: productId } })
    .then(product => {
        product_id = product.id
    })
  let cart,user;
  return User.findByPk(Id)
            .then(u => {
               user = u;
               return Cart.findOrCreate({ where: { userId: user.id, state: 'created' } })
                }).then(c => {
                    cart = c[0];
                    return Cart_Item.findOne({where: {cartId: cart.id, productId: productId}})
                  }).then(ct => {
                      if (ct){
                          return Cart_Item.update({ 
                              quantity
                            },{
                              where: { cartId: cart.id, productId: productId },
                              returning: true
                            })
                      }else{
                        return Cart_Item.create({cartId: cart.id, productId: productId, quantity: quantity});
                      }
                  }).then(result => {
                    if (result.length > 1){
                      res.status(201).json(result[1][0])
                    }else{
                      res.status(201).json(result)
                    }
                  }).catch(next)    
}


function editQuantity(req, res, next) {
  const Id = req.params.userId;
  const { productId, quantity } = req.body;
  let user;
  let cart;
  return User.findByPk(Id)
            .then(u => {
              user = u;
              return Cart.findOne({where: {userId: user.id, state: 'created' }})
              }).then(c => {
                if (!c){ res.status(404).json('User does not have a current cart open') }
                cart = c;
                return Product.findOne({where: {id: productId}})
              }).then(p => {
                if (!p){
                  res.status(404).json('Product does not exist anymore')
                }
                return Cart_Item.update({quantity: quantity},{ where: { cartId: cart.id, productId: p.id }, returning: true})
              }).then(ct => {
                if (ct[0] === 0){
                  return res.status(404).send('Product is not in the cart');
                }
                return res.status(200).json(ct[1][0])
              }).catch(next);
}


function deleteItem(req, res, next) {
  const Id = req.params.userId;
  const { productId } = req.body;
  let user;
  let cart;
  return User.findByPk(Id)
            .then(u => {
              user = u;
              return Cart.findOne({where: {userId: user.id, state: 'created' }})
              }).then(c => {
                if (!c){ res.status(404).json('User does not have a current cart open') }
                cart = c;
                return  Cart_Item.destroy({where: { cartId: cart.id, productId: productId }})
              }).then(result => {
                if (result){
                  return res.status(200).json('Product deleted form cart')  
                }
                return res.status(404).json('Product is not in the cart')
              }) .catch(next);
}

function deleteAll(req, res, next) {
  const Id = req.params.userId;
 
  return User.findByPk(Id)
            .then(u => {
            
              return Cart.findOne({where: {userId: u.id, state: 'created' }})
              }).then(c => {
                if (!c){ res.status(404).json('User does not have a current cart open') }
               
                return  Cart_Item.destroy({where: { cartId: c.id }})
              }).then(result => {
                if (result){
                  return res.status(200).json(result + ' products where seleted from the cart')  
                }
                return res.status(404).json('No products in the cart')
              }) .catch(next);
}

module.exports = {
  createCart,
  getCart,
  addProduct,
  editQuantity,
  deleteItem,
  deleteAll
};
