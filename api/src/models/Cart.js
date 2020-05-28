const Cart = (db, Sequelize) => {
    const C = db.define('product', {
        idCart: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        // items debería ser un array de objetos
        // [{
        //     productId: 345,
        //     quantity: 2,
        // },
        // {
        //     productId: 346,
        //     quantity: 5,
        // }]
        items: {
            type: Sequelize.ENUM,
            // debería empezar como un array vacío
            allowNull: false,
        },
        // Example:
        // DataTypes.ENUM('value', 'another value')
        // DataTypes.ENUM(['value', 'another value'])
        // DataTypes.ENUM({
        //   values: ['value', 'another value']
        // })
        // https://sequelize.org/master/class/lib/data-types.js~ENUM.html
    });

    return C;
}

module.exports = Cart;
