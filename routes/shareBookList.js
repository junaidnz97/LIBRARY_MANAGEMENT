// User: Student
// Function: If no books are available for issue, student can request other students who have
// issued the book to share the book.
// Input: BookId
// Output: List of students that have the required book

const mysql = require('mysql');
var shareBookList = function(app,con){

	const {query} = require('../database/db');


	app.post("/share-book-list",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
      		bookid = req.body.bid;

			var q = "select * from Student where UserID in (select UserId from CurrentBookStatus where BookId=" + bookid  + ");";
			var output = await query(q,con);
			if(output.length == 0)
					res.send({"status":"No issued books found"});
				else
					res.send({"users":output});

		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});



	app.post("/check-reserve",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{

			uname = req.session.username;
			let qget = 'SELECT UserId from Student WHERE username = '+uname+ ";";
			console.log(qget);
			var res1=await query(qget,con);
			userid = res1[0].UserId;

			var q = "select flag,BookId from Reserve where UserId=" +userid+ ";";
			var output = await query(q,con);
			if(output.length != 0)
					res.send({"details":output});
				else
					res.send({"zeros":"not reserved"});

		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});

	app.post("/reserve-book",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{

      		bookid = req.body.bid;

			var q = "INSERT INTO Reserve(UserId,BookId) select UserId,BookId from CurrentBookStatus where BookId=" + bookid  + ";";
			var output = await query(q,con);
			console.log(output);
			if(output.length == 0)
					res.send({"status":"No issued books found"});
				else
					res.send({"users":output});

		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={shareBookList:shareBookList};
