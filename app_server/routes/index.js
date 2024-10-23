const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations'); // Updated path
const ctrlOthers = require('../controllers/others'); // Updated path

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/register', ctrlLocations.register);
router.get('/login', ctrlLocations.login);

/* Other pages */
router.get('/data', ctrlOthers.data);

module.exports = router;
