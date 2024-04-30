const mongoose = require('mongoose');
const { describe } = require('node:test');
const { createDeflate } = require('zlib');


const reviewSchema = mongoose.Schema({
    ProductId:{
        type:String,
        unique:true,
        required : true,
    },
    userId:{
        type:String,
        required:true,
    },
    UserName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    images:
    [
        String
    ],
    createdAt: {
        type:Date,
        default:new Date(),
    },
    updatedAt: {
        type:Date,
        default:new Date(),
    }
})

const reviewModel= mongoose.model('review',reviewSchema);

// const testProduct = new productModel({
//     title:'Titan Watch',
//     price:1000,
// });

// testProduct.save().then((res)=>{
//     console.log(res);
// })



module.exports = reviewModel;



