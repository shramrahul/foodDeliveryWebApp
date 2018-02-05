var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var food= require('../models/food')

/* GET home page. */
router.post('/createfood', function(req, res, next) {
    var food1= {
        name: req.body.name,
        cuisine: req.body.cuisine,
        price:req.body.price,
        id: req.body.id
    }
    food.create(food1,(err,food)=>{
        if(err) res.send(err);

        console.log(food);
    })
  });
  
  module.exports = router;