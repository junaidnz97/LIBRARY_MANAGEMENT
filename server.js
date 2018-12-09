var express=require("express");
var app = express();
var bodyParser=require("body-parser");

var mysql=require("mysql");

var apilogin = require("./routes/apilogin.js");
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

var shareBookList = require("./routes/shareBookList.js")
var shareBookRequest = require("./routes/shareBookRequest.js")

var pay_fine = require("./routes/pay-fine");
var returnbook = require("./routes/return");
var cataloguesearch=require("./routes/cataloguesearch");

var requestBook = require("./routes/requestBook.js");
var requestedBookList = require("./routes/requestedBookList.js");
var removeBookRequest = require("./routes/removeBookRequest.js");
//var addindex=require("./routes/addindex.js");

var userList = require("./routes/userlist");
var userBookRecords = require("./routes/userBookRecords");

var addBookRecord = require("./routes/addBookRecord.js");
var trial =  require('./routes/trial.js')

var filtersearch=require("./routes/filtersearch");
var cataloguefilter=require("./routes/cataloguefilter");
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
    if (req.cookies.user_sid && !(req.session.username||req.session.adminusername)) {
        res.clearCookie('user_sid');
    }
    next();
});


// var con = mysql.createPool({
//     host: "us-cdbr-iron-east-01.cleardb.net",
//     user: "bfd712e27d3e0e",
//     password: "141a123b",
//     database:"heroku_2460774cb2e36e4",

//   	});

var con = mysql.createPool({
    host: "addbinstance2.cfdhbd9aqiv2.us-east-1.rds.amazonaws.com",
    user: "AdMenon",
    password: "qwertyuiop",
    database:"LibraryManagement",

     });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log('Connected to the database')

// });

var server=app.listen("9090",function(){

	console.log("server working");
});

var elasticsearch=require("elasticsearch");
var client=new elasticsearch.Client({

    host: "localhost:9200",
    log : "trace"
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});





signup.signup(app,con);
booksummary.booksummary(app,con);
borrow.borrow(app,con);
catalogue.catalogue(app,con);

displayuserprofile.displayuserprofile(app,con);
rate_review.rate_review(app,con);
adminlog.adminlog(app,con);
rate_review.rate_review(app,con);


updateBookRecord.updateBookRecord(app,con);
deleteBookRecord.deleteBookRecord(app,con);

pay_fine.pay_fine(app,con);
apilogin.apilogin(app,con);


shareBookList.shareBookList(app,con);
shareBookRequest.shareBookRequest(app,con);

returnbook.returnbook(app,con);

requestBook.requestBook(app,con);
requestedBookList.requestedBookList(app,con);
removeBookRequest.removeBookRequest(app,con);


cataloguesearch.cataloguesearch(app,con,client);

//addindex.addindex(app,con,client);

userList.userList(app,con);
userBookRecords.userBookRecords(app,con);

addBookRecord.addBookRecord(app,con);
trial.trial(app,con);
filtersearch.filtersearch(app,con);
cataloguefilter.cataloguefilter(app,con);

module.exports={
    app:app
};
