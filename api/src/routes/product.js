const server = require('express').Router();
//Require User ya que los productos los venden los usuarios
const { Product, User } = require('models/index.js');

/**Producto esta formado de 
    itemID: id
    itemName: string
    itemDescription: text
    itemStock: numero mayor que 0
    itemPrice: numero mayor que 0
    itemImg: url
    createdBy: User (debe estar autenticado/Registrado)
    itemCategory: array de category
*/

/**
 * Interacciones
 * Get *Todos +
 * Get *Algunos x Categoria o semejanza(?)
 * Get *Especifico
 * Post *Crear Nuevo
 * Delete *Especifico
 * Put *Especifico
 */

// Get Todos
server.get('/', (req, res, next) =>{

    Product.findAll()
        .then((products) => 
        res.send(products))
        .catch(next);
});
// get
server.get('/:id', function( req, res, next){
    //Producto de ID especifico
    
    Product.findOne({
        where:{
            //id de busqueda
            id: req.params.id
        }

    }).then((product) => {
        console.log(product)
    });

    //Pagina donde se va a mostrar estos Get
    res.render('PaginaHarcodeadaGet')

})
//Post *Crearnuevo
server.post('/add_product', function(req, res, next) {
    //Si el usuario esta registrado y crea el producto me traigo estos datos
    const { itemName, itemDescription, itemStock, itemPrice, itemImg, createdBy } = req.body;

    Product.findOrCreate({
        where:{
            nameProduct,
            createdBy,
        }
    }).then((products) => {
        return Product.create({
            name: itemName,
            description: itemDescription,
            stock: itemStock,
            price: itemPrice,
            picture: itemImg,
        }).then((createdProduct) =>{
            return createdProduct.setSeller(products[0].dataValues.id)
        })
    }).then((result) => {
        res.redirect(result.urlTitle);
    })

});





module.exports = server;