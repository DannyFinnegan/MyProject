const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlProducts = require('../controllers/data');
const User = require('../models/user');
const ctrlLocations = require('../controllers/user');

router
    .route('/login')
    .get(ctrlLocations.loadlogin)
    .post(ctrlLocations.UserLogin);

router
    .route('/register')
    .get(ctrlLocations.loadregister)
    .post(ctrlLocations.RegisterUser);

router
    .route('/user/:Email')
    .get(ctrlProducts.UserLogin);

router.get('/favicon.ico', (req, res) => res.status(204));

router
    .route('/')
    .get(ctrlProducts.DataGatherProducts)
    .post(ctrlProducts.DataCreate);

router
    .route('/logout')
    .get(ctrlLocations.UserLogout); 

router
    .route('/:productid')
    .get(ctrlProducts.ProductsReadOne)
    .put(ctrlProducts.ProductsUpdateOne)
    .delete(ctrlProducts.ProductsDeleteOne);

router
    .route('/register')
    .post(ctrlLocations.RegisterUser);

router.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
