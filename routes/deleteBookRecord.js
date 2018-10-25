var deleteBookRecord = function(app,urlencodedParser,con){

	app.post("/delete-book-record",urlencodedParser,function(req,res){
		if(req.session.username && req.cookies.user_sid)
		{
      bookid = req.body.bid;

			var q = "delete from BookDetail where BookId=" + bookid +";";
			con.query(q,function(err,resp){
				if(err)
					throw err;
				output = JSON.parse(JSON.stringify(resp));
	
				res.send(output);
			});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={deleteBookRecord:deleteBookRecord};
