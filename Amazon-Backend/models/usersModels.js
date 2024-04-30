const mongoose = require('mongoose');
const { describe } = require('node:test');
const { createDeflate } = require('zlib');


const userSchema = mongoose.Schema({
         Firstname:{
            type:String,
            required:true,
        },
         Lastname:{
            type:String,
            required:true,
        },
        email:{
            type:String,
        },
        Gender:{
            type:String,
    
        }
    })

const usersModel= mongoose.model('users ',userSchema);

// const testProduct = new productModel({
//     title:'Titan Watch',
//     price:1000,
// });

// testProduct.save().then((res)=>{
//     console.log(res);
// })



module.exports = usersModel;



