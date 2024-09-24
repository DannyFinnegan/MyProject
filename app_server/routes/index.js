const express = require('express');
const router = express.Router();
const ctrlMain = require('../Controllers/main'); 
/* GET home page. */
router.get('/', ctrlMain.index); 
router.get('/about',ctrlMain.about);
router.get('/register', ctrlMain.register);
router.get('/login', ctrlMain.login);
router.get('/data', ctrlMain.data);
module.exports = router;
