const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        uppercase : true,
        trim : true,
    },
    lastname : {
        type : String,
        required : true,
        uppercase : true,
        trim : true,
    },
    image : {
        type : String,
    },
    email : {
        type : String,
        trim : true,
    },
    password : {
        type : String
    },
    age : {
        type : Number
    },
    createdOn : {
        type : Date,
        default : Date.now,
    },
    role : {
        type : String,
        default : "client",
        enum : ['client','admin','superAdmin']
    }
});

module.exports = User = mongoose.model('user',userSchema);