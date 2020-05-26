const server = require('express').Router();

const { getProducts, getOneProduct, createProduct, editProduct , deleteProduct } = require('../controllers/productController.js');


// Get Todos
server.get('/', getProducts);

// Get One
server.get('/:id', getOneProduct);

// Post Crear nuevo
server.post('/', createProduct);

// Put update
server.put('/:id', editProduct);

// delete eliminar
server.delete('/:id', deleteProduct);


module.exports = server;