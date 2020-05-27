const { Product } = require('models/index.js');

function getProducts(req, res, next) {
  return Product.findAll()
    .then(products => res.json(products))
    .catch(next);
}

function getOneProduct(req, res, next) {
  // Producto de ID especifico
  const { id } = req.params;

  return Product.findOne({
    where: {
      // id de busqueda
      id,
    },
  }).then(product => res.json(product))
    .catch(next);
}

function getProductsPaged(req, res, next){
  //Define la offset("compensador") y el limite en 0 y 9 respectivamente.
  let offset = 0;
  let limit = 10;

  Product.findAndCountAll()
  .then((data) => {
    let page = req.params.page;
    //findAndCountAll crea 2 instancias count(entero - cantidad de coincidencias con la query) y row(array - coincidencias obtenidas)
    let pages = Math.ceil(data.count / limit)
    offset = limit * (page - 1)

    Product.findAll({
      limit,
      offset,
      $sort: { id: 1}
    }).then(result => res.status(201).json(result))
  }).catch(next);

}

function createProduct(req, res, next) {
  // Si el usuario esta registrado y crea el producto me traigo estos datos
  const { title, description, price, stock, picture } = req.body;
  return Product.create({
    title,
    description,
    price,
    stock,
    picture
  }).then(result => res.status(201).json(result))
    .catch(next);
}

function editProduct(req, res, next) {
  const { id } = req.params;
  const { title, description, stock, price, picture } = req.body;

  if (!req.body.id) {
    throw new Error('Producto no encontrado.');
  }

  Product.update({
    where: { id },
  }, {
    title,
    description,
    stock,
    price,
    picture
  }).then(editedProduct => res.status(202).json(editedProduct))
    .catch(next);
}

function deleteProduct(req, res, next) {
  const { id } = req.params;

  Product.destroy({
    where: { id },
  }).then(result => res.status(204).json(result))
    .catch(next);
}

module.exports = {
  getProducts,
  getOneProduct,
  getProductsPaged,
  createProduct,
  editProduct,
  deleteProduct
};
