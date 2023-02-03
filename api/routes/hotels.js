const express = require('express');
const Hotels = require('../controller/hotels.js');
const Hotel = require('../models/Hotel.js');
const createError  = require('../utils/error.js');
const verifyAdmin = require('../utils/verifyToken.js');
const router = express.Router();

//create
router.post('/', verifyAdmin, Hotels().createHotel)
//update
router.put('/:id', verifyAdmin, Hotels().updateHotel)
//delete
router.delete('/:id', verifyAdmin, Hotels().deleteHotel)
//get
router.get('/:id', Hotels().getHotel)
//get all
router.get('/', Hotels().getHotels)


module.exports = router;
