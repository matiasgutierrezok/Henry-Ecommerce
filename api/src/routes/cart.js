const server = require('express').Router();

const { createCart, getCart, editQuantity, deleteItem, deleteAll } = require('../controllers/cartController.js');

// POST: agrega un producto y cantidad al carrito.
server.post('/', createCart);

// GET: devuelve un arreglo con items del carrito
server.get('/:cartId', getCart);

// PUT: para editar la cantidad de un producto
server.put('/:cartId', editQuantity);

// DELETE ‘/:productID’: para eliminar un producto
server.delete('/:productId', deleteItem);

// DELETE '/' Vaciar: Elimina todos los items del carrito
server.delete('/', deleteAll);

module.exports = server;