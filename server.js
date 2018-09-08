var express=require("express");
var app = express();
var bodyParser=require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var mysql=require("mysql");
var signup=require("./database/signup.js");
var session = require('express-session');

app.use(session({
    key: 'user_sid',
    secret: 'shitjustgotreal',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));



var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "junaid123$",
    database: "LibraryManagement"
  	});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database')

});

var server=app.listen("9090",function(){

	console.log("server working");
});

app.post("/signup",urlencodedParser,function(req,res){

	var query='select count(*) as count from Authorization where UserName="'+req.body.username+'" or EmailId="'+req.body.emailid+'"';
	var x=0;
	console.log(query);
	con.query(query,function(err,resp){

		if(err)
			throw err;
		x=JSON.parse(JSON.stringify(resp))[0].count;
		
		if(x==0)
		{
			var query='insert into Authorization(UserName,EmailId,Password) values("'+req.body.username+'","'+req.body.emailid+'","'+req.body.password+'")';
			console.log(query);
			con.query(query,function(err,resp2){
				if(err)
					throw err;
				req.session.username=req.body.username;
	 			console.log(req.body.username,req.session.username);
	 			res.send({"hello":"welcome"});
				
			});
		}

		else
		{
			res.send("already present");
		}
	});
});

app.post("/login",urlencodedParser,function(req,res){

		if(req.session.username)
				res.send("already logged in");
		else
			res.send("login");
});

