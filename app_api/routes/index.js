const express = require('express');
const router = express.Router();
const passport = require('passport');
const ctrlProducts = require('../controllers/data');
const User = require('../models/user');

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


router.post('/register', (req, res) => {
    User.register(new User({ email: req.body.email, name: req.body.name }), req.body.password, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        passport.authenticate('local')(req, res, () => {
            res.status(200).json({ message: 'Registration successful' });
        });
    });
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Login successful' });
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
});

module.exports = router;
