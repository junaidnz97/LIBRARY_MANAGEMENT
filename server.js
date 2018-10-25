var express=require("express");
var app = express();
var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql=require("mysql");


var signup=require("./routes/signup.js");
var borrow = require("./routes/borrow.js");
var catalogue = require("./routes/catalogue.js")
var session = require('express-session');
var cookieParser=require("cookie-parser");
var booksummary=require("./routes/booksummary.js");

var displayuserprofile=require("./routes/displayuserprofile");
var rate_review = require("./routes/rate_review.js");
var adminlog=require("./routes/adminlog.js");

var updateBookRecord = require("./routes/updateBookRecord.js")
var deleteBookRecord = require("./routes/deleteBookRecord.js")

var pay_fine = require("./routes/pay-fine");

app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: 'shitjustgotreal',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.username) {
        res.clearCookie('user_sid');
    }
    if (req.cookies.user_sid && !req.session.adminusername) {
        res.clearCookie('user_sid');
    }
    next();
});


var con = mysql.createConnection({

    host: "0.tcp.ngrok.io",
    port: "14616",
    user: "root",
    password: "Ad_07_",
    database:"LibraryManagement"
  	});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database')

});

var server=app.listen("9090",function(){

	console.log("server working");
});

signup.signup(app,urlencodedParser,con);
booksummary.booksummary(app,urlencodedParser,con);
borrow.borrow(app,urlencodedParser,con);
catalogue.catalogue(app,urlencodedParser,con);

displayuserprofile.displayuserprofile(app,con);
rate_review.rate_review(app,urlencodedParser,con);
adminlog.adminlog(app,urlencodedParser,con);
rate_review.rate_review(app,urlencodedParser,con);


updateBookRecord.updateBookRecord(app,urlencodedParser,con);
//deleteBookRecord.deleteBookRecord(app,urlencodedParser,con);

pay_fine.pay_fine(app,urlencodedParser,con);
