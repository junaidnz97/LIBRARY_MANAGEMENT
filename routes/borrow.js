var borrow = function(app,urlencodedParser,con){

	app.post("/borrow",urlencodedParser,function(req,res){
		bookid = req.body.bid;
		userid = req.body.uid;
		var q0 = "select AvailableQuantity from BookDetail where BookID = " + bookid;
		console.log(q0);
		con.query(q0,function(err,resp0){
			if (err){
				console.log(resp0);
				throw err;
			}
			console.log(resp0);
			quantity = JSON.parse(JSON.stringify(resp0))[0];
			if(quantity.AvailableQuantity == 0){
				res.send("book not available");
				return;
			}

			var q1 = "select Premium from BookDetail where BookID = " + bookid;
			console.log(q1);
			con.query(q1,function(err,resp1){
				if (err)
					throw err;
				status = JSON.parse(JSON.stringify(resp1))[0];
				console.log(status);
				if (status.Premium == 1){
					res.send({"book-status" : "premium", "bid" : bookid, "uid" :userid})
					return;
				}


				var q2 = "update BookDetail set AvailableQuantity = AvailableQuantity - 1 where BookId = " + bookid;
				console.log(q2);
				con.query(q2,function(err,resp2){
					if (err)
						throw err;
					output = JSON.parse(JSON.stringify(resp2));
					console.log(output);
				});
				var q3 = "select HBookId from CurrentBookStatus where BookId = "+ bookid
						+" and UserId is NULL LIMIT 1";
				console.log(q3);
				con.query(q3,function(err,resp3){
					if (err)
						throw err;
					HBookId = JSON.parse(JSON.stringify(resp3))[0];
					console.log(HBookId);
					var q4 = "update CurrentBookStatus set issuedate = now(), EReturnDate = now()+interval 14 day,UserId = "
							+userid+" where HBookId="+HBookId.HBookId;
					console.log(q4);
					con.query(q4,function(err,resp4){
						if(err)
							throw err;
						output = JSON.parse(JSON.stringify(resp4s));
						console.log(output);
					});
					res.send({"status":"borrow request successfull","bid":bookid,"HBookId":HBookId.HBookId,"uid":userid});
				});
				
			});	
		});
		
	});
}

module.exports={borrow:borrow};
