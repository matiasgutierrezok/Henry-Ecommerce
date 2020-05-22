const server = require('express').Router();
//Require User ya que los productos los venden los usuarios
const { Product, User } = require('models/index.js');
//App.js ya tiene incluido un bodyParser

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
        res.send(products)
    });
    

})
//Post *Crearnuevo
server.post('/', function(req, res, next) {
    //Si el usuario esta registrado y crea el producto me traigo estos datos
    const { name, description, stock, price, img, createdBy } = req.body;

        Product.create({
            name: name,
            description: description,
            stock: stock,
            price: price,
            picture: img,
      /*   }).then((createdProduct) =>{ //observacion para cuando haya usuarios (?)
            return createdProduct.setSeller(products[0].dataValues.createdBy)
        }) */
    }).then((result) => {
        res.redirect(result.urlTitle);
    })

});

//update
server.put('/', function(req,res,next){
    if(!req.body.id){
        return res.send({error: "PUT, no se encontro el id"})
    }

    const productModified = products.filter(prod => prod.id === req.body.id)[0];

    productModified.name = req.body.name;
    productModified.description = req.body.description;
    productModified.stock = req.body.stock;
    productModified.price = req.body.price;
    productModified.picture = req.body.picture;
    //productModified.createdBy = req.body.createdBy;
    
    res.send(productModified);
});

//delete
server.delete('/', function(req,res,next){
    if(!req.body.id){
        return res.status(422).json({error: "DELETE, no se recibieron los parametros para eliminar el Producto"})
    }

    const index = products.reduce((acc,cv,idx) => {
        if(cv.id === req.body.id) return idx;
        return acc;
    }, -1);

    if(index == -1) return res.status(422).json({error: "DELETE IF, no se recibieron los parametros para eliminar el Producto"})
    products.splice(index,1);

    res.send({success: true});

})



module.exports = server;