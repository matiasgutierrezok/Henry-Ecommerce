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
                    .then(() => done(new Error('It requires a valid email')))
                    .catch(() => done());
            });
            it('should return a valid string as title', (done) => {
                Product.create({
                    title: 'Celular nuevo',
                })
                    .then(() => done(new Error('Title cannot be empty')))
                    .catch(() => done());
            });
            // it('should throw an error if is not a string', (done) => {
            //     Product.create({
            //         email: [],
            //     })
            //         .then(() => done(new Error('It needs only to accept strings')))
            //         .catch(() => done());
            // });
            // it('should work when its a valid email', () => {
            //     Product.create({ email: 'valid@email.com' });
            // });
        });
    });
});
