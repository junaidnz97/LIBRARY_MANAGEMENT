const mysql = require('mysql');
var removeBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.post("/remove-book-request",async(req,res)=>{
<<<<<<< HEAD
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
=======
	// 	if(req.session.username && req.cookies.user_sid)
	// 	{
  //
  //
	// 	}
	// 	else
	// 	{
	// 		res.send({"output":"notloggedin"});
	// 	}
	 });
>>>>>>> 290354ce1005378ed4447e04d30b40d775d05916

}

module.exports={removeBookRequest:removeBookRequest};
