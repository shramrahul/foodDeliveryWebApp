var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var restaurants = require('../models/restaurant')
var VerifyToken = require('../auth/VerifyToken');
// 
/* GET home page. */
// router.post('/createfood', function(req, res, next) {
   
//     foods.find({"id":"1001"},(err,food)=>{
//         if(err) res.send(err);
//         console.log(food);
//         res.send(food);
        
//     })
//   });
router.get('/get', function (req, res, next) {
<<<<<<< HEAD
    console.log("i am here");
    restaurants.find({}, (err, food) => {
=======
    restaurants.findOne({}, (err, food) => {
>>>>>>> 77e5ad2e3abacc6cc88753af8f4b3fde137241c9
        if (err) res.send(err);
        console.log(food);
        res.send(food);

    })
});

router.post('/search', function (req, res, next) {
    if(req.body.latitude && req.body.longitude) {
        let latitude = req.body.latitude;
        let longitude = req.body.longitude;
        restaurants.find({
            location: {
                '$near': [longitude, latitude],
                '$maxDistance': 1000 / 6371
            }
        }).limit(5).exec(function (error, restaurants) {
            res.send({restaurants});
        });
    }else {
       let restaurantsSearchParam = req.body.search;
        restaurants.find({name: { $regex: restaurantsSearchParam, $options: 'i' }}).limit(5)
            .exec(function (error, restaurants) {
            res.send({restaurants});
        });
    }
});
router.put('/:id', function (req, res, next) {
    const id = req.params.id;
    console.log(req.body);
    restaurants.findByIdAndUpdate(id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    })
});

  module.exports = router;