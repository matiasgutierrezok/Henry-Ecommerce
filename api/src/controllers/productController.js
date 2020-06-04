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
  //Define offset("compensador") en 0 y el limite en 100.
  let offset = 0;
  let limit = 9;

  //findAndCountAll crea 2 instancias count(entero - cantidad de coincidencias con la query) y row(array - coincidencias obtenidas)
  Product.findAndCountAll()
  .then((data) => {
    //posicion de la ruta en pagina /1, /2, etc. Segun corresponda.
    let page = req.params.page;
    let listedData = data.count;
    let pages = Math.ceil(listedData / limit);
    //gestion de error a mejorar, rompe un poco la db pero cumple con su funcion.
    if (page > pages || page < 1) {
      throw new Error('Producto fuera de rango.');
    }
    offset = limit * (page - 1);

    return Product.findAll({
      limit,
      offset,
      $sort: { id: 1}
    }).then(data => res.status(201).json({
      data,
      totalPages: Math.ceil(listedData / limit),
      currentPage: page
    }))
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

  if (!req.params.id) {
    throw new Error('Producto no encontrado.');
  }

  Product.update({
    title,
    description,
    stock,
    price,
    picture
  },{
    where: { id }
  } ).then(editedProduct => res.status(202).json(editedProduct))
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
