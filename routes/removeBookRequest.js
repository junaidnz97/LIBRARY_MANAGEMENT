// User: Admin
// Function: Remove book request from the list of request
// Input: BookName
// Output: Request deletion status (For successful insertion)


const mysql = require('mysql');
var removeBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.post("/remove-book-request",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
      bookname = req.body.bname;

      var request_book_remove_query = "delete from RequestedBook where BookName=" + bookname;
      var output = await query(request_book_remove_query,con);

      res.send(output);
		}
		else
		{
			res.send({"output":"notloggedin"});
		}

  });


}

module.exports={removeBookRequest:removeBookRequest};
