var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
// var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('../config')
var VerifyToken = require('../auth/VerifyToken');
var UserSchema = new mongoose.Schema({
    name: {
        fullname: {type: String}
    },
    address: {
        street: {type: String},
        city: {type: String},
        state: {type: String},
        zipcode: {type: Number},
        coord:[{latitude:{type:Number}, longitude:{type:Number}}]
    },
    credentials: {
        username: {type: String, unique: true, required: true, trim: true},
        password: {type: String, required: true},
        email: {type: String, unique: true, required: true, trim: true}
    },

    food_ordered:[
        {date:Date, food: {id:String, cuisine:String, name:String,price:Number},restaurant_used:Number},
        {date:Date, food: {id:String, cuisine:String, name:String,price:Number},restaurant_used:Number},
        {date:Date, food: {id:String, cuisine:String, name:String,price:Number},restaurant_used:Number},
        {date:Date, food: {id:String, cuisine:String, name:String,price:Number},restaurant_used:Number},
        ]
    // state: {
    //     type: String,
    //     required: true
    // },
    // city: {
    //     type: String,
    //     required: true
    // },
    // street: {
    //     type: String,
    //     required: true
    // },
    // zipcode: {
    //     type: String,
    //     required: true
    // }

    // passwordConf: {
    //   type: String,
    //   required: true,
    // }
});


//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({email: email})
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    // console.log("Login++++++"+user.toString());
                    var token = jwt.sign(user, config.secret, {
                        expiresIn: 10080 // in seconds
                    });

                    return callback(null, user, token);
                } else {
                    return callback();
                }
            })
        });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});


var User = mongoose.model('User', UserSchema);
module.exports = User;

