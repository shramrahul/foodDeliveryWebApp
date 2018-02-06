var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//var restaurants= require('../models/restaurant')
// 
/* GET home page. */
// router.post('/createfood', function(req, res, next) {
   
//     foods.find({"id":"1001"},(err,food)=>{
//         if(err) res.send(err);
//         console.log(food);
//         res.send(food);
        
//     })
//   });
router.get('/get', function(req, res, next) {
    var food= [{
        "_id": {
            "$oid": "5a79e823734d1d0828bd3e46"
        },
        "id": 23446,
        "name": "Arandas Mexican Restaurant",
        "address": {
            "street": "203 W Broadway Ave",
            "city": "Fairfield",
            "state": "IA",
            "zip": 52557
        },
        "location": [
            -91.965476,
            41.007864
        ],
        "foods": [
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Suman",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Apple",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Banana",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Pear",
                "price": 23
            }
        ],
        "rating": 5,
        "reviews": [
            {
                "username": "Shreeram",
                "comment": "This is the best restaurant ever",
                "rating": 4
            }
        ]
    },

    {
        "_id": {
            "$oid": "5a79e823734d1d0828bd3e46"
        },
        "id": 23446,
        "name": "Arandas Mexican Restaurant",
        "address": {
            "street": "203 W Broadway Ave",
            "city": "Fairfield",
            "state": "IA",
            "zip": 52557
        },
        "location": [
            -91.965476,
            41.007864
        ],
        "foods": [
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Suman",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Apple",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Banana",
                "price": 23
            },
            {
                "id": "123",
                "cuisine": "Nepal",
                "name": "Pear",
                "price": 23
            }
        ],
        "rating": 5,
        "reviews": [
            {
                "username": "Shreeram",
                "comment": "This is the best restaurant ever",
                "rating": 4
            }
        ]
    }


]

    res.send(food)
    // restaurants.findOne({},(err,food)=>{
    //     if(err) res.send(err);
    //     console.log(food);
    //     res.send(food);
        
    //})
  });
  


  module.exports = router;