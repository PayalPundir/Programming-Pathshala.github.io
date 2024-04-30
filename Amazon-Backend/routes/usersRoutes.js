const express = require("express");
const usersController = require('../controllers/usersControlers.js');
const userRouter = express.Router();

userRouter.route('/')
.get(usersController.getAllUsers)
.post(usersController.addUsers);

userRouter.route('/:id')
.put(usersController.replaceUsers)
.delete(usersController.deleteUsers);





module.exports = userRouter;