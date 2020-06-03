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
  Cart,
  Cart_Item
} = models;

// Add model relationships here

Product.belongsTo(User, { as: 'author' });
Product.belongsToMany(Categories, {
  through: 'categoriesAssociation'
});
Categories.belongsToMany(Product, {
  through: 'categoriesAssociation'
});

Cart.belongsTo(User);
User.hasOne(Cart);
Cart.belongsToMany(Product, { through: Cart_Item });
Product.belongsToMany(Cart, { through: Cart_Item });

module.exports = models;
