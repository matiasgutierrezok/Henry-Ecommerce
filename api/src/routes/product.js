const server = require('express').Router();

const { getProducts, getOneProduct, createProduct, editProduct , deleteProduct } = require('../controllers/productController.js');


// Get Todos
server.get('/', getProducts);

// Get One
server.get('/:id', getOneProduct);

// Post *Crearnuevo
server.post('/', createProduct);

// update
server.put('/', editProduct);

// delete
server.delete('/', deleteProduct);



module.exports = server;