// User: Admin
// Function: View all the books requested by students
// Input: NULL
// Output: list of requested books


const mysql = require('mysql');
var requestedBookList = function(app,con){

	const {query} = require('../database/db');


	app.post("/requested-book-list",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{

			var book_list_query = "select * from RequestedBook" ;
			var requested_book_list = await query(book_list_query,con);

			res.send(requested_book_list);

		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});

}

module.exports={requestedBookList:requestedBookList};
