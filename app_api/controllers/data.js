const mongoose = require('mongoose');
require('../models/products');
const Product = mongoose.model('Product');

const DataCreate = function (req, res) {
    res
        .status(200)
        .json({ "status": "Success, DataCreate Has Passed" });
};

const DataGatherProducts = function (req, res) {
    res
        .status(200)
        .json({ "status": "Success, DataGatherProducts Has Passed" });
};

const ProductsReadOne = function (req, res) {
    Product
        .findById(req.params.productid)
        .then(product => {
            if (!product) {
                console.log(req.params.productid);
                return res.status(404).json({ "message": "Product not found" });
            }
            returnres.status(200).json(product);
        });
};

const ProductsUpdateOne = function (req, res) {
    res
    .status(200)
    .json({ "status": "Success, DataGatherProducts Has Passed" });
 };
const ProductsDeleteOne = function (req, res) {
    res
    .status(200)
    .json({ "status": "Success, DataGatherProducts Has Passed" });
 };

module.exports = {
    DataGatherProducts,
    DataCreate,
    ProductsReadOne,
    ProductsUpdateOne,
    ProductsDeleteOne
};
