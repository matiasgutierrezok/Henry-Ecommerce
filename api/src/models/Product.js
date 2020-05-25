const Product = (db, Sequelize) => {
    const P = db.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            isFloat: true,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            defaultValue: 0,
            min: 0,
        },
        picture: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: 'https://image.flaticon.com/icons/png/512/65/65686.png',
            isUrl: true,
        },
    });
    return P;
}

module.exports = Product;
