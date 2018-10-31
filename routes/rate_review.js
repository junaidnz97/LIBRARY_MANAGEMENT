const mysql = require('mysql');
var rate_review = function(app,con){

	const {query} = require('../database/db');

	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });


	app.post("/rate_review",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			userId = req.session.userid;
			bookId = req.body.bookId;
			rating = req.body.rating;
			review = req.body.review;
			var q = "insert into RatingAndReview values (" +
					bookId + "," + userId + "," + rating + ",'" +
					review + "',NOW())";
			console.log(q);
			var resp = await query(q,con);
			res.send({"status":"Rating and review stored successfully"}); 
			// con.query(q,function(err,resp){
			// 	if(err)
			// 		throw err;
			// 	console.log(resp);
			// 	res.send("Rating and review stored successfully"); 
			// }); 
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={rate_review:rate_review};