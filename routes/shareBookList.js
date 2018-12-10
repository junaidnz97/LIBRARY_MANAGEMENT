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

}

module.exports={shareBookList:shareBookList};
