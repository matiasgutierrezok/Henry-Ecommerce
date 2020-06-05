const { User } = require('models/index.js');
const server = require('express').Router();
const { createUser, getUser } = require('../controllers/userController.js');

server.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => res.send(users))
    .catch(next);
});

// Post Crear nuevo
server.post('/', createUser);

// GET: devuelve los items dentro de un carrito
server.get('/:userId', getUser);

module.exports = server;
