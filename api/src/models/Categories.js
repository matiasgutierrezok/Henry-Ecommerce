const Categories = (db, Sequelize) => {
    const C = db.define('categories', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
    })
    return C;
}

module.exports = Categories;

