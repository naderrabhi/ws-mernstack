const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        uppercase : true,
        trim : true,
    },
    // author : String,
    image : {
        type : String,
    },
    description : {
        type : String,
        trim : true,
    },
    price : {
        type : Number
    },
    createdOn : {
        type : Date,
        default : Date.now,
    }
});

module.exports = Products = mongoose.model('product',ProductsSchema);