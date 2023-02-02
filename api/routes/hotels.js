const express = require('express');
const createHotel = require('../controllers/hotel.js');
const updateHotel = require('../controllers/hotel.js');
const getHotels = require('../controllers/hotel.js');
const deleteHotel = require('../controllers/hotel.js');
const getHotel = require('../controllers/hotel.js');
const Hotel = require('../models/Hotel.js');
const createError  = require('../utils/error.js');
const router = express.Router();

//create
router.post('/', createHotel)
//update
router.put('/:id', updateHotel)
//delete
router.delete('/:id', deleteHotel)
//get
router.get('/:id', getHotel)
//get all
router.get('/', getHotels)


module.exports = router;
