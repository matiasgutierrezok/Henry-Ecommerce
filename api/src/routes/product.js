const server = require('express').Router();

const { getProducts, getOneProduct, getProductsPaged, createProduct, editProduct , deleteProduct } = require('../controllers/productController.js');


// Get Todos
server.get('/', getProducts);

// Get One
server.get('/:id', getOneProduct);

//Get Paginacion Sprint2
server.get('/paged/:page', getProductsPaged);

// Post Crear nuevo
server.post('/', createProduct);

// Put update
server.put('/:id', editProduct);

// delete eliminar
server.delete('/:id', deleteProduct);


module.exports = server;
