const mongoose = require('mongoose');
require('../models/products');
require('../models/user');
const Product = mongoose.model('Product');

const DataCreate = function (req, res) {
    Product.create({
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image
    }).then(product => {
        res.status(201).json(product);
    }).catch(err => {
        res.status(400).json(err);
    });
};

const DataGatherProducts = function (req, res) {
    Product.find()
        .then(products => {
            res.render('data', { 
                title: `Welcome ${req.user ? req.user.name : 'Guest'}`, 
                products: products,
                user: req.user ? req.user.name : 'Guest'
            });
        })
        .catch(err => {
            console.error("Error gathering products:", err);
            res.status(500).json({ "message": "Error gathering products" });
        });
};

const ProductsReadOne = function (req, res) {
    const productId = req.params.productid;

    Product.findById(productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({ "message": "Product not found" });
            }
            res.status(200).json(product);
        })
        .catch(err => {
            console.error("Error finding product by ID:", err);
            res.status(500).json({ "message": "Error finding product" });
        });
};

const ProductsUpdateOne = function (req, res) {
    const productId = req.params.productid;

    Product.findByIdAndUpdate(productId, {
        name: req.body.name,
        price: req.body.price,
        rating: req.body.rating,
        image: req.body.image
    }, { new: true, runValidators: true })
        .then(product => {
            if (!product) {
                return res.status(404).json({ "message": "Product not found" });
            }
            res.status(200).json(product);
        })
        .catch(err => {
            console.error("Error updating product:", err);
            res.status(500).json({ "message": "Error updating product" });
        });
};

const ProductsDeleteOne = function (req, res) {
    const productId = req.params.productid;

    Product.findByIdAndDelete(productId)
        .then(product => {
            if (!product) {
                return res.status(404).json({ "message": "Product not found" });
            }
            res.status(204).json(null);
        })
        .catch(err => {
            console.error("Error deleting product:", err);
            res.status(500).json({ "message": "Error deleting product" });
        });
};

const CreateUser = function (req, res) {
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => {
        res.status(201).json(user);
    }).catch(err => {
        res.status(400).json(err);
    });
};

const UserLogin = function (req, res) {
    User.findOne({ email: req.params.Email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ "message": "User not found" });
            }
            res.status(200).json(user);
        })
        .catch(err => {
            console.error("Error finding user by email:", err);
            res.status(500).json({ "message": "Error finding user" });
        });
};

module.exports = {
    DataGatherProducts,
    DataCreate,
    ProductsReadOne,
    ProductsUpdateOne,
    ProductsDeleteOne,
    CreateUser,
    UserLogin,
};
