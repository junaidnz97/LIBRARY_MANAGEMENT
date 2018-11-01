const mysql = require('mysql');
var deleteBookRecord = function(app,con){

	const {query} = require('../database/db');

	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.post("/delete-book-record",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
      bookid = req.body.bid;


			var q = "delete from BookDetail where BookId=" + bookid +";";
			output = await query(q,con);
			res.send(output);
			// con.query(q,function(err,resp){
			// 	if(err)
			// 		throw err;
			// 	output = JSON.parse(JSON.stringify(resp));

			// 	res.send(output);
			// });
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={deleteBookRecord:deleteBookRecord};
