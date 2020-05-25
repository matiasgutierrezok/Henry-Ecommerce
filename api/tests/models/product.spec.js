const { Product } = require('models');
const { expect } = require('chai');
const sequelize = require('db.js')();

describe('Product model', () => {
    before(() => sequelize.authenticate()
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        }));
    after(() => sequelize.close());
    describe('Validators', () => {
        beforeEach(() => Product.sync({ force: true }));
        describe('title', () => {
            it('should throw an error if title is empty', (done) => {
                Product.create({})
                    .then(() => done(new Error('It requires a valid title')))
                    .catch(() => done());
            });
            it('should return a valid string as title', (done) => {
                Product.create({
                    title: 'Celular nuevo',
                })
                    .then(() => done(new Error('Title cannot be empty')))
                    .catch(() => done());
            });
            it('should use a float number for price', (done) => {
                Product.create({
                    price: 1453.67,
                })
                    .then(() => done(new Error('Only accept numbers as price')))
                    .catch(() => done());
            });
            it('should throw an error if doesnt have a category', (done) => {
                Product.create({
                    //category: '',
                })
                    .then(() => done(new Error('It needs at least one category')))
                    .catch(() => done());
            });
        });
    });
});
