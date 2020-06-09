const server = require('express').Router();

const { createCart, getCart, addProduct, editQuantity, deleteItem, deleteAll } = require('../controllers/cartController.js');

// POST: crea el carrito.
server.post('/:userId', createCart);

// POST: agrega un producto al carrito y cantidad al carrito.
server.post('/addProduct/:userId', addProduct);

// GET: devuelve los items dentro de un carrito
server.get('/:userId', getCart);

// // PUT: para editar la cantidad de un producto
server.put('/:userId', editQuantity);

// // DELETE ‘/:productID’: para eliminar un producto
server.delete('/:userId', deleteItem);

// // DELETE '/' Vaciar: Elimina todos los items del carrito
server.delete('/deleteAll/:userId', deleteAll);

module.exports = server;