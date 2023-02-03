const express = require('express');
const router = express.Router();
const users = require("../controllers/user.js")
// const updatedUser = require("../controllers/user.js")
// const deleteUser = require("../controllers/user.js")
// const getUser = require("../controllers/user.js")
// const getUsers = require("../controllers/user.js");
const verifyAdmin = require('../utils/verifyToken.js');
const verifyUser = require('../utils/verifyToken.js');
const verifyToken = require('../utils/verifyToken.js')

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user ur login")
// })


// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, ur login an d u can delete ur account")
// })


// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello Admin, ur login an d u can delete all account")
// })

//update
router.put('/:id', verifyUser, users().updateUser)
//delete
router.delete('/:id', verifyUser, users().deleteUser)
//get
router.get('/:id', verifyUser, users().getUser)
//get all
router.get('/', verifyAdmin, users().getAllUsers)

module.exports = router;
