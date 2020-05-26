const { Router } = require('express');
// import all routers;
// const authRouter = require('./auth.js');
const userRouter = require('./user.js');
const productRouter = require('./product.js');


const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/product', productRouter);

module.exports = router;
