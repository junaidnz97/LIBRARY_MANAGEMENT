const mysql = require('mysql');
var userBookRecords = function(app,con){

	const {query} = require('../database/db');

	app.get("/books-in-possession",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			var userid = req.session.userid
			var q = "select * from BookLogTrigger where UId="+userid+
					" and DOR is NULL";
			console.log(q);
			var result = await query(q,con);
			var Details = [];
			console.log(result);
			for(var i = 0;i<result.length;i++){
				var hid = result[i].HId;
				console.log(result[i]);
				var q1 = "select BookId from CurrentBookStatus where HBookId="+hid;
				console.log(q1);
				var result1 = await query(q1,con);
				console.log(result1[0]);
				var bid = result1[0].BookId;
				var q2 = "select BookName,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId="+bid+
					" and BookDetail.BookId = BookAuthor.BookId";
				var result2 = await query(q2,con);
				Details.push({"IssueDate":result[i].DOI,"BookId":bid,"BookName":result2[0].BookName,
						"BookAuthor":result2[0].BookAuthor});
			}
			res.status(200).send({"Details":Details});
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});

	app.get("/books-in-possession_admin",async(req,res)=>{
		
		if(req.session.adminusername && req.cookies.user_sid)
		{
			console.log("IIIINNNN")
			uname = req.query.username;
			let qget = 'SELECT UserId from Student WHERE username = '+uname;
			var res1=await query(qget,con);
			userid = res1[0].UserId;
			console.log(userid);
			//var userid = req.session.userid
			var q = "select * from BookLogTrigger where UId="+userid+
					" and DOR is NULL";
			console.log(q);
			var result = await query(q,con);
			var Details = [];
			console.log(result);
			for(var i = 0;i<result.length;i++){
				var hid = result[i].HId;
				console.log(result[i]);
				var q1 = "select BookId from CurrentBookStatus where HBookId="+hid;
				console.log(q1);
				var result1 = await query(q1,con);
				console.log(result1[0]);
				var bid = result1[0].BookId;
				var q2 = "select BookName,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId="+bid+
					" and BookDetail.BookId = BookAuthor.BookId";
				var result2 = await query(q2,con);
				Details.push({"IssueDate":result[i].DOI,"BookId":bid,"BookName":result2[0].BookName,
						"BookAuthor":result2[0].BookAuthor});
			}
			res.status(200).send({"Details":Details});
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});





	app.get("/books-history",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			var userid = req.session.userid
			var q = "select * from BookLogTrigger where UId="+userid;
			console.log(q);
			var result = await query(q,con);
			var Details = [];
			console.log(result);
			for(var i = 0;i<result.length;i++){
				var hid = result[i].HId;
				console.log(result[i]);
				var q1 = "select BookId from CurrentBookStatus where HBookId="+hid;
				console.log(q1);
				var result1 = await query(q1,con);
				console.log(result1[0]);
				var bid = result1[0].BookId;
				var q2 = "select BookName,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId="+bid+
					" and BookDetail.BookId = BookAuthor.BookId";
				var result2 = await query(q2,con);
				Details.push({"IssueDate":result[i].DOI,"ReturnDate":result[i].DOR,"BookId":bid,"BookName":result2[0].BookName,
						"BookAuthor":result2[0].BookAuthor});
			}
			res.status(200).send({"Details":Details});
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});

	app.get("/books-history-admin",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
			uname = req.query.username;
			let qget = 'SELECT UserId from Student WHERE username = '+uname;
			var res1=await query(qget,con);
			userid = res1[0].UserId;
			console.log("in hist",userid);
			var q = "select * from BookLogTrigger where UId="+userid;
			console.log(q);
			var result = await query(q,con);
			var Details = [];
			console.log(result);
			for(var i = 0;i<result.length;i++){
				var hid = result[i].HId;
				console.log(result[i]);
				var q1 = "select BookId from CurrentBookStatus where HBookId="+hid;
				console.log(q1);
				var result1 = await query(q1,con);
				console.log(result1[0]);
				var bid = result1[0].BookId;
				var q2 = "select BookName,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId="+bid+
					" and BookDetail.BookId = BookAuthor.BookId";
				var result2 = await query(q2,con);
				Details.push({"IssueDate":result[i].DOI,"ReturnDate":result[i].DOR,"BookId":bid,"BookName":result2[0].BookName,
						"BookAuthor":result2[0].BookAuthor});
			}
			res.status(200).send({"Details":Details});
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});

}

module.exports = {userBookRecords:userBookRecords};