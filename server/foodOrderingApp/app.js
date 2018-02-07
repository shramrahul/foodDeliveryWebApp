var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cors = require('cors');


//connect to MongoDB
mongoose.connect('mongodb://suman:suman@ds125068.mlab.com:25068/food_ordering_app_db');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("we re connected");
});

//use sessions for tracking logins
app.use(session({
    secret: 'supersecret',
    cookie: { maxAge: 2628000000 },
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: db
    })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/public'));

app.use(cors());

// include routes
var routes = require('./routes/router');
var restaurant = require('./routes/restaurant');
app.use(routes);
app.use('/',routes);
app.use('/restaurant',restaurant);
// app.use('login', routes);
// app.use('register',routes);
// app.use('dashboard',routes);
// app.use('updateuser',routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message);
    res.send(err.message);
});


// listen on port 3000
app.listen(8080, function () {
    console.log('Express app listening on port 8080');
});

module.exports = app;