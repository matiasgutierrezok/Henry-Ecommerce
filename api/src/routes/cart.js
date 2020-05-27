const server = require('express').Router();

const { createCart, getProducts, getOneProduct, editProduct , deleteProduct } = require('../controllers/cartController.js');


// Post Crear nuevo
server.post('/', createCart);

// Get Todos
server.get('/', getProducts);

// Get One
server.get('/:id', getOneProduct);

// Put update
server.put('/', editProduct);

// delete eliminar
server.delete('/', deleteProduct);


module.exports = server;