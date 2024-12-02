const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/data');

router
    .route('/login')
    .get(ctrlProducts.LoadLogin)
    //.post(ctrlProducts.CreateUser);

router
    .route('/register')
    .get(ctrlProducts.LoadRegister);

router
    .route('/user/:Email')
    .get(ctrlProducts.UserLogin);

router.get('/favicon.ico', (req, res) => res.status(204));

router
    .route('/')
    .get(ctrlProducts.DataGatherProducts)
    .post(ctrlProducts.DataCreate);

router
    .route('/:productid')
    .get(ctrlProducts.ProductsReadOne)
    .put(ctrlProducts.ProductsUpdateOne)
    .delete(ctrlProducts.ProductsDeleteOne);

router.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = router;