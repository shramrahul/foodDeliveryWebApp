var express = require('express');
var router = express.Router();
var User = require('../models/user');
var VerifyToken = require('../auth/VerifyToken');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var config = require('../config')

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

// GET route for reading data
router.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '/public/index.html'));
});


//POST route for updating data
router.post('/register', function (req, res, next) {
    // confirm that user typed same password twice
    // if (req.body.password !== req.body.passwordConf) {
    //     var err = new Error('Passwords do not match.');
    //     err.status = 400;
    //     // res.send("passwords do not match");
    //     return res.status(400).send({auth:false,token:null,message: "passwords do not match"});
    // }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.state && req.body.city && req.body.street && req.body.zipcode) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            // credentials: { email: req.body.email},
            address: {
                street: req.body.street,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
                coord: [{latitude: 123, longitude: 345}]
            },
            // name:{fullname:"Suman"},
            // credentials:{email: req.body.email, username: req.body.username, password: req.body.password},
            // address: {street:req.body.street, city: req.body.city, state: req.body.state, zipcode: req.body.zipcode},
            food_ordered: [
                {
                    date: 2018 / 1 / 3,
                    food: {id: "123", cuisine: "Nepal", name: "Suman", price: 23},
                    restaurant_used: 23
                },
            ]
            // state: req.body.state,
            // city: req.body.city,
            // street: req.body.street,
            // zipcode: req.body.zipcode
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                var token = jwt.sign({id: user._id}, config.secret, {
                    expiresIn: 10080 // in seconds
                });
                // req.session.userId = user._id;
                return res.status(200).send({auth: true, token: token});
            }
        });
        // }else if (req.body.logemail && req.body.logpassword) {
        //     User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
        //         if (error || !user) {
        //             var err = new Error('Wrong email or password.');
        //             err.status = 401;
        //             return next(err);
        //         } else {
        //             req.session.userId = user._id;
        //             return res.redirect('/profile');
        //         }
        //     });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
})

router.post('/login', function (req, res, next) {
    console.log("inside login")
    if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user, token) {
            if (error || !user) {
                // var err = new Error('Wrong email or password.');
                // err.status = 401;
                return res.status(401).send({auth: false, token: null});
            } else {
                req.session.userId = user._id;
                return res.status(200).send({"user_id": user._id, "token": token,})//res.redirect('/profile');
            }
        });
    }
})

// GET route after registering

router.get('/dashboard', VerifyToken, function (req, res, next) {
    userIdd = req.headers['userid'];
    User.findById(userIdd)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send({user});
                }
            }
        });
});

// GET for logout logout
router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                console.log("hello" + err);
                return next(err);
            } else {

                // return res.redirect('/');
                return res.send({auth: false, token: null})
            }
        });
    }
});

module.exports = router;