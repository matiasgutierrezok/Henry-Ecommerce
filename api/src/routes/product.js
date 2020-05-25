const server = require('express').Router();

const { getProducts, getOneProduct, createProduct, editProduct , deleteProduct } = require('../controllers/productController.js');


// Get Todos
server.get('/', getProducts);

// Get One
server.get('/:id', getOneProduct);

// Post Crear nuevo
server.post('/', createProduct);

// Put update
server.put('/', editProduct);

// delete eliminar
server.delete('/', deleteProduct);


module.exports = server;