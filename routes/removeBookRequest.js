const mysql = require('mysql');
var removeBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.post("/remove-book-request",async(req,res)=>{
	// 	if(req.session.username && req.cookies.user_sid)
	// 	{
  //
  //
	// 	}
	// 	else
	// 	{
	// 		res.send({"output":"notloggedin"});
	// 	}
	// });

}

module.exports={removeBookRequest:removeBookRequest};
