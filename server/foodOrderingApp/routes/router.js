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
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        // res.send("passwords do not match");
        return res.status(400).send({auth:false,token:null,message: "passwords do not match"});
    }

    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                var token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 10080 // in seconds
                });
               // req.session.userId = user._id;
                return res.status(200).send({auth:true, token: token});
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
    if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user, token) {
            if (error || !user) {
                // var err = new Error('Wrong email or password.');
                // err.status = 401;
                return res.status(401).send({auth:false,token:null});
            } else {
                req.session.userId = user._id;
                return res.status(200).send({"name": user._id, "token": token})//res.redirect('/profile');
            }
        });
    }
})

// GET route after registering
router.get('/profile',VerifyToken, function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
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
                console.log("hello"+ err);
                return next(err);
            } else {

                // return res.redirect('/');
                return res.send({auth:false, token: null})
            }
        });
    }
});

module.exports = router;