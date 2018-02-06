var mongoose = require('mongoose');

var restaurantSchema =new mongoose.Schema(
//     {
//         "address": {
//             "building": {type: String },
//             "coord": {
//                 "long": {type: String},
//                 "lat": {type: String }
//             },
//             "street": {type: String },
//             "zipcode": {type: String}
//         },
//         "district": {type: String },
//         "cuisine": {type: String },
//         "grades": [
//             {
//                 "date": {type: Date },
//                 "grade": {type: String },
//                 "score": {type: Number}
//             }
            
//         ],
//         "name": {type: String },
//         "restaurant_id": {type: String },
//         "foods": [
//             {type: String }
//         ]
    
// }

{
    id: String,
    name: String,
    address:{street:String, city:String, state:String, zip:String},
    location: [Number],
    foods: [ {id: {String}, cuisine: {String}, name: {String}, price: {Number} }],
    location:{type: [Number],index:'2d'},
    foods: [String],
    rating: Number,
    reviews: [{username: String, comment: String, rating: Number}],
    images: [String]
}, {collection: "restaurant"})

restaurantSchema.index({location: '2d'});

module.exports = mongoose.model("restaurant", restaurantSchema);
