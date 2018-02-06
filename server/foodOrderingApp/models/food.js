
var mongoose = require('mongoose');

var foodSchema =new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    cuisine:{
        type: String,
        unique: false,
        required: true,
        trim: true
    },
    price:{
        type: String,
        unique: false,
        required: true,
        trim: true
    }
});


module.exports = mongoose.model('foods',foodSchema);