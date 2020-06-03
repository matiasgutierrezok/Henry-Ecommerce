const Cart = (db, Sequelize) => {
    const C = db.define('carts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }
    });
    return C;
}

module.exports = Cart;
