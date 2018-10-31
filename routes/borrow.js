const mysql = require('mysql');
var borrow = function(app,con){

	const {query} = require('../database/db');
	
	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.post("/borrow",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
        {
			bookid = req.body.bid;
			userid = req.session.userid;
			var q0 = "select AvailableQuantity from BookDetail where BookID = " + bookid;
			console.log(q0);
			quantity = await query(q0,con);
			console.log(quantity[0]);
			if(quantity[0].AvailableQuantity == 0){
					res.send("book not available");
					return;
			}
			var q1 = "select Premium from BookDetail where BookID = " + bookid;
			console.log(q1);
			status = await query(q1,con);
			console.log(status[0]);
			if (status[0].Premium == 1){
				res.send({"book-status" : "premium", "bid" : bookid, "uid" :userid})
				return;
			}
			var q2 = "update BookDetail set AvailableQuantity = AvailableQuantity - 1 where BookId = " + bookid;
			console.log(q2);
			output = await query(q2,con);
			//console.log(output);
			var q3 = "select HBookId from CurrentBookStatus where BookId = "+ bookid
							+" and UserId is NULL LIMIT 1";
			console.log(q3);
			HBookId = await query(q3,con);
			console.log(HBookId)
			var q5 = "insert into BorrowRequest values ("+HBookId[0].HBookId+","+bookid+","+userid+",NOW())";
			result = await query(q5,con);
			res.send({"status":"borrow request successfull"});
			// var q4 = "update CurrentBookStatus set issuedate = now(), EReturnDate = now()+interval 14 day,UserId = "
			// 		+userid+" where HBookId="+HBookId[0].HBookId;
			// console.log(q4);
			// output = await query(q4,con);
			// res.send({"status":"borrow request successfull","bid":bookid,"HBookId":HBookId[0].HBookId,"uid":userid});
			
		}
		else
		{
			 res.send({"output":"notloggedin"});
		}
		
	});
	app.post("/view-request-admin",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
        {
        	var disp = req.body.disp;
        	if(disp)
        	{
        		var q = "select *,FirstName,LastName from BorrowRequest,Student where BorrowRequest.UserId=Student.UserId";
        		console.log(q);
        		var result = await query(q,con);
        		res.send(result); 
        	}
        	else{
	        	var type = req.body.type;
				if(type)
				{
					var HBookId = req.body.hbookid;
					var UserId = req.body.userid;
					var q = "update CurrentBookStatus set issuedate = now(), EReturnDate = now()+interval 14 day,UserId = "
					 		+UserId+" where HBookId="+HBookId;
					var result = await query(q,con);
					var q1 ="delete from BorrowRequest where UserId ="+UserId+" and HBookId="+
							HBookId;
					var res1 = await query(q1,con);
					res.send({"status":"book issued"});
				}
				else
				{
					var HBookId = req.body.hbookid;
					var UserId = req.body.userid;
					var q1 ="delete from BorrowRequest where UserId ="+UserId+" and HBookId="+
							HBookId;
					var res1 = await query(q1,con);
					console.log(res1);
					res.send({"status":"book not issued"});
				}

			}
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={borrow:borrow};
