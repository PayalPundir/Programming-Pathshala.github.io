const { stat } = require('fs');
const productModel = require('../models/prouctsModel.js');


const getAllProducts = async (req, res) => {
    const {sort = 'price', page=1, pageSize=3,fields='-title', ...q} = req.query;
    console.log(q,sort);
    let query = productModel.find(q);
   

    const sortStr = sort.split(',').join(' ');
    const fieldsStr = fields.split(',').join(' ');
    const skip = pageSize * (page-1);
    query.skip(skip).limit(pageSize);
    // query = query.select('-title');
    query = query.select(fields);
    const data  = await query;
    const totalResults = await productModel.countDocuments();


    // console.log(data);
    // console.log(r eq.url);
    res.json({
        status: 'success',
        results: data.length ,
        
        data: {
            products:data
        },
        totalResults: totalResults,
        pageSize: pageSize,
        page: page
    })
}

const addProduct = async (req, res) => {
    try {
        const data = await productModel.create(req.body);
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

const replaceProduct = async (req, res) => {

    try {

        const reqId = req.params.id;
        const data = { ...req.body, _id:reqId };
        const result = await productModel.findOneAndReplace({ _id: reqId }, data);
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
    getAllProducts, addProduct, replaceProduct,

}