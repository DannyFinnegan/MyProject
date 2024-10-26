const express = require('express');
const router = express.Router();
const ctrlLocations = require('../Controllers/locations'); 

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/register', ctrlLocations.register);
router.get('/login', ctrlLocations.login);

module.exports = router;
