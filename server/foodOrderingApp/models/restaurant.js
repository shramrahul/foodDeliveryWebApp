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
    "_id": {
        "$oid": {type:String}
    },
    "address": {
        "building": {type:String},
        "coord": {
            "long": {type:Number},
            "lat": {type:Number}
        },
        "street": {type:String},
        "zipcode": {type:String}
    },
    "district": {type:String},
    "cuisine": {type:String},
    "grades": [
        {
            "date": {type:String},
            "grade": {type:String},
            "score": {type:Number}
        },
    ],
    "name": {type:String},
    "restaurant_id": {type:String},
    "foods": [

    {type:String}
        
    ]
}


);


module.exports = mongoose.model('restaurant ',restaurantSchema);