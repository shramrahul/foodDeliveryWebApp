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
  

    res.send(food)
    restaurants.findOne({},(err,food)=>{
        if(err) res.send(err);
        console.log(food);
        res.send(food);
        
    })
  });
  


  module.exports = router;