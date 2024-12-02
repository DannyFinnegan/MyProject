const mongoose = require('mongoose');
require('../models/products');
require('../models/user');
const Product = mongoose.model('Product');
const User = mongoose.model('User');

const login = function (req, res) {
    res.render('login', { title: 'Login' });
};

const register = function (req, res) {
    res.render('register', { title: 'Register User' });
};

module.exports = {
    login,
    register
};
