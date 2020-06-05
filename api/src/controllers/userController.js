const { User } = require('models/index.js');

function createUser(req, res, next) {
    const { email, password } = req.body;
    // agregar condicional en caso de que el mail
    // ya esté registrado
    return User.create({
        email,
        password
    }).then(newUser => res.status(201).json(newUser))
        .catch(next);
}

function getUser(req, res, next) {
    const { userId } = req.params;
    return User.findAll({ where: { id:userId } })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
    createUser,
    getUser,
};  