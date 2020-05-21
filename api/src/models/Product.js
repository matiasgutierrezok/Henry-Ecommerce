const Product = (db, Sequelize) => {
    const P = db.define('product', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        // el id se genera automaticamente
        // idProduct: {
        //   type: Sequelize.INTEGER,
        //   // necesito un acumulador así puedo armar la URL en base al title + idProduct
        // },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            // hay un tipo de dato de valor moneda?, me conviene o lo pongo el $ en el elemento?
            allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        category: {
            type: Sequelize.STRING,
            // esto deberia ser un array ?
            allowNull: false,
            // aca deberia marcar que al menos necesito una
        },
        picture: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: 'una url de la foto'
            // acá podría poner un ternario ???
            // agregar val por defect onlyURL
        },
        ////////////////////////////////////////////////
        // esto debería ir en otra parte del back
        // urlProduct: {
        //     type: Sequelize.STRING,
        //     allowNull: false,
        //     isUrl: true,
        // },
        // route: {
        //     type: Sequelize.STRING,
        //     get() {
        //         return '/catalog/' + this.getDataValue('urlProduct') + '_' + this.getDataValue('idProduct');
        //         // esto seria adentro de catalog?
        //         //taza_de_cafe_65
        //     },
        // }
    });

    // User.addHook('beforeValidate', page => {
    //     page.urlProduct = page.title
    //         .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
    //         .trim()
    //         .split(' ')
    //         .join('_');
    // });

    ///////////////////////////////////////////////

    P.addHook('beforeValidate', product => {
        product.stock = 1 || '?'
        // stock >= 0
    });

    return P;
}

module.exports = Product;
