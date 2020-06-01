const server = require('express').Router();

const { createCart, getCart, 
    //editQuantity, deleteItem, deleteAll 
} = require('../controllers/cartController.js');

// POST: agrega un producto y cantidad al carrito.
server.post('/:cartId', createCart);

// GET: devuelve el carrito
server.get('/:cartId', getCart);

// GET: devuelve los productos del carrito
server.get('/products/:cartId', getCart);
// ahre que hace lo mismo

// PUT: agrega un producto al carrito
// server.put('/:cartId', editQuantity);

// // PUT: para editar la cantidad de un producto
// server.put('/:cartId', editQuantity);

// // DELETE ‘/:productID’: para eliminar un producto
// server.delete('/:cartId', deleteItem);

// // DELETE '/' Vaciar: Elimina todos los items del carrito
// server.delete('/:cartId', deleteAll);

module.exports = server;