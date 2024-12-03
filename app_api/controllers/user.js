const mongoose = require('mongoose');
const passport = require('passport');
require('../models/user');
const User = mongoose.model('User');

const loadlogin = function (req, res) {
    res.render('login', { title: 'Login' });
};

const loadregister = function (req, res) {
    res.render('register', { title: 'Register User' });
};

const RegisterUser = function (req, res) {
    const newUser = new User({ email: req.body.email, name: req.body.name });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        passport.authenticate('local')(req, res, () => {
            res.redirect('/');
        });
    });
};

const UserLogin = function (req, res, next) {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        });
    })(req, res, next);
}

const UserLogout = function (req, res, next) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}

module.exports = {
    loadlogin,
    loadregister,
    RegisterUser,
    UserLogin,
    UserLogout
};
