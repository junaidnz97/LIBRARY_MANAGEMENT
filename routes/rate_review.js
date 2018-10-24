var rate_review = function(app,urlencodedParser,con){
	app.post("/rate_review",urlencodedParser,function(req,res){
		if(req.session.username && req.cookies.user_sid)
		{
			userId = req.body.userId;
			bookId = req.body.bookId;
			rating = req.body.rating;
			review = req.body.review;
			var q = "insert into RatingAndReview values (" +
					bookId + "," + userId + "," + rating + ",'" +
					review + "',NOW())";
			console.log(q);
			con.query(q,function(err,resp){
				if(err)
					throw err;
				console.log(resp);
				res.send("Rating and review stored successfully") 
			}); 
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={rate_review:rate_review};