const { stat } = require('fs');
const usersModel = require('../models/usersModels.js');


const getAllUsers = async (req, res) => {               //for get
    const data = await usersModel.find();
    console.log(data);

    res.json({
        status: 'success',
        ressult: 0,
        data: {
            products: data,
        }
    })
}
const addUsers = async (req, res) => {
    try {
        const data = await usersModel.create(req.body);
        console.log(data);
        res.json({
            status: 'false',
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

const replaceUsers = async (req, res) => {

    try {

        const reqId = req.params.id;
        const data = { ...req.body, _id:reqId };
        const result = await usersModel.findOneAndReplace({ _id: reqId }, data);
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



const deleteUsers = async (req, res) => {

    try {

        const reqId = req.params.id;
        const data = { ...req.body, _id:reqId };
        const result = await usersModel.findOneAndDelete({ _id: reqId }, data);
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
    getAllUsers, addUsers, replaceUsers, deleteUsers

}