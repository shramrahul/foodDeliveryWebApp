var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var restaurants = require('../models/restaurant')
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
    console.log("i am here");
    restaurants.findOne({}, (err, food) => {
        if (err) res.send(err);
        console.log(food);
        res.send(food);

    })
});
router.post('/search', function (req, res, next) {
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

});
  module.exports = router;