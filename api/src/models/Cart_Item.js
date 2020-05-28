const Cart_Item = (db, Sequelize) => {
    const C = db.define('cart_items', {
        id: {
	        type: Sequelize.INTEGER,
	        autoIncrement: true,
	        primaryKey: true
    	},
    	quantity: {
    		type: Sequelize.INTEGER,
    		allowNull: false
    	}
    });
    return C;
}

module.exports = Cart_Item;