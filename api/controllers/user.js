const User = require("../models/User.js")

const Users = () => {
    return {
        getAllUsers: async (req, res, next) => {
            try {
                const users = await User.find()
                res.status(200).json(users)
            } catch (err) {
                next(err)
            }
        },
        getUser: async (req, res, next) => {
            try {
                const user = await User.findById(
                    req.params.id)
                res.status(200).json(user)
            } catch (err) {
                next(err)
            }
        },
        deleteUser: async (req, res, next) => {
            try {
                await User.findByIdAndDelete(
                    req.params.id)
                res.status(200).json("User Has Been delated")
            } catch (err) {
                next(err)
            }
        },
        updateUser: async (req, res, next) => {
            try {
                const updatedUser = await User.findByIdAndUpdate(
                    req.params.id,
                    { $set: { username: req.body.username } },
                    { new: true })
                res.status(200).json(updatedUser)
            } catch (err) {
                next(err)
            }
        }
    }
}

module.exports = Users;