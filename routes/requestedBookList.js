const mysql = require('mysql');
var requestedBookList = function(app,con){

	const {query} = require('../database/db');


	app.post("/requested-book-list",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{

			var book_list_query = "select * from RequestedBook" ;
			var requested_book_list = await query(book_list_query,con);

			res.status(200).send(requested_book_list);

		}
		else
		{
			res.status(400).send({"output":"notloggedin"});
		}
	});

}

module.exports={requestedBookList:requestedBookList};
