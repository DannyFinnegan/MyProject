const express = require('express');
const router = express.Router();
const ctrlProducts = require('../controllers/data');

router
    .route('/')
    .get(ctrlProducts.DataGatherProducts)
    .post(ctrlProducts.DataCreate);

router
    .route('/:productid')
    .get(ctrlProducts.ProductsReadOne)
    .put(ctrlProducts.ProductsUpdateOne) 
    .delete(ctrlProducts.ProductsDeleteOne);

router
    .route('/user')
    .post(ctrlProducts.CreateUser);

router
    .route('/user/:Email')
    .get(ctrlProducts.UserLogin);

module.exports = router;
