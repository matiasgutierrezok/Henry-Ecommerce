const fs = require('fs');
const path = require('path');
const db = require('db.js');

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split('.')[0];
    models[name] = model;
  });

const {
  User,
  Product,
  Categories,
  Cart
} = models;

// Add model relationships here

Product.belongsTo(User, { as: 'author' });
Product.belongsToMany(Categories, {
  through: 'categoriesAssociation'
})
Categories.belongsToMany(Product, {
  through: 'categoriesAssociation'
})
User.hasOne(Carrito);
Cart.hasMany(Products);
// cómo debería ser la relacion carrito/productos?
// mi único dato de asociación es productId en el array de items

module.exports = models;
