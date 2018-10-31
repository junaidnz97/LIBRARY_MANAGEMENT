const mysql = require('mysql');
var userBookRecords = function(app,con){

	const {query} = require('../database/db');

	app.get("/books-in-possesion",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			var userid = req.session.userid
			var q = "select * from BookLogTrigger where UId="+userid+
					" and DOR is NULL";
			console.log(q);
			var result = await query(q,con);
			res.send({"result":result});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	app.get("/books-history",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			var userid = req.session.userid
			var q = "select * from BookLogTrigger where UId="+userid;
			var result = await query(q,con);
			res.send({"result":result});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});

}

module.exports = {userBookRecords:userBookRecords};