const server = require('express').Router();

const { createCart, getCart, addProduct, editQuantity, deleteItem, deleteAll } = require('../controllers/cartController.js');

// POST: crea el carrito.
server.post('/:cartId', createCart);

// POST: agrega un producto al carrito y cantidad al carrito.
server.post('/addProduct/:cartId', addProduct);

// GET: devuelve los items dentro de un carrito
server.get('/:cartId', getCart);

// // PUT: para editar la cantidad de un producto
server.put('/:cartId', editQuantity);

// // DELETE ‘/:productID’: para eliminar un producto
server.delete('/:cartId', deleteItem);

// // DELETE '/' Vaciar: Elimina todos los items del carrito
server.delete('/deleteAll/:cartId', deleteAll);

module.exports = server;