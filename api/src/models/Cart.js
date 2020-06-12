const Cart = (db, Sequelize) => {
    const C = db.define('carts', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        state: {
	      type: Sequelize.ENUM,
	      values: ['created', 'inprogress', 'finished'],
	      defaultValue: 'created'
    	}
    });
    return C;
}

module.exports = Cart;
