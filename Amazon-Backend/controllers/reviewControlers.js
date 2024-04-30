const { stat } = require('fs');
const reviewModel = require('../models/reviewModels.js');


const getAllReview = async (req, res) => {
    try {

        const rating = req.params.rating;
        const data = { ...req.body, _rating:rating };
        const result = await reviewModel.find(data);
        res.json({
            status: 'sucess',
            data: {
                products: result,
            }
        });
    }

    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const addReview = async (req, res) => {
    try {
        const data = await reviewModel.create(req.body);
        console.log(data);
        res.json({
            status: 'success',
            results: 1,
            data: {
                products: data,
            }

        })
    }
    catch (err) {
        console.log(err);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}

const replaceReview = async (req, res) => {

    try {

        const reqId = req.params.id;
        const data = { ...req.body, _id:reqId };
        const result = await reviewModel.findOneAndReplace({ _id: reqId }, data);
        res.json({
            status: 'sucess',
            data: {
                products: result,
            }
        });
    }

    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}


const deleteReview = async (req, res) => {

    try {

        const reqId = req.params.id;
        const data = { ...req.body, _id:reqId };
        const result = await reviewModel.findOneAndDelete({ _id: reqId }, data);
        res.json({
            status: 'sucess',
            data: {
                products: result,
            }
        });
    }

    catch (err) {
        res.status(500);
        res.json({
            status: 'fail',
            message: JSON.stringify(err),
        })
    }
}



module.exports = {
   getAllReview, addReview, replaceReview, deleteReview,

}