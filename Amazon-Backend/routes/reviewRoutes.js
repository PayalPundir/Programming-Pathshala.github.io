const express = require("express");
const reviewsController = require('../controllers/reviewControlers.js');
const reviewRouter = express.Router();

reviewRouter.route('/')
.get(reviewsController.getAllReview)
.post(reviewsController.addReview);

reviewRouter.route('/:id')
.put(reviewsController.replaceReview)
.delete(reviewsController.deleteReview);




module.exports = reviewRouter;