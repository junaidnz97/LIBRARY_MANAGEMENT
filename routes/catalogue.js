const mysql = require('mysql');
var catalogue = function(app,con){
	
	const {query} = require('../database/db');

	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.get("/catalogue",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			var q = "select *,Author from BookDetail,BookAuthor where BookDetail.BookId = BookAuthor.BookId";
			var output = await query(q,con);
			if(output.length == 0)
					res.send({"status":"No books found"});
				else
					res.send({"book-details":output});

			// con.query(q,function(err,resp){
			// 	if(err)
			// 		throw err;
			// 	output = JSON.parse(JSON.stringify(resp));
			// 	if(output.length == 0)
			// 		res.send("No books found");
			// 	else
			// 		res.send({"book-details":output});
			// });
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	
}

module.exports={catalogue:catalogue};