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
			bookid = req.body.bookId;
			userid = req.session.userid;
			var q0 = "select AvailableQuantity from BookDetail where BookID = " + bookid;
			console.log(q0);
			quantity = await query(q0,con);
			console.log(quantity[0]);
			if(quantity[0].AvailableQuantity == 0){
					res.status(200).send("book not available");
					return;
			}
			var q1 = "select Premium from BookDetail where BookID = " + bookid;
			console.log(q1);
			status = await query(q1,con);
			console.log(status[0]);
			if (status[0].Premium == 1){
				res.status(200).send({"book-status" : "premium", "bid" : bookid, "uid" :userid})
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
			res.status(200).send({"status":"borrow request successfull"});
			// var q4 = "update CurrentBookStatus set issuedate = now(), EReturnDate = now()+interval 14 day,UserId = "
			// 		+userid+" where HBookId="+HBookId[0].HBookId;
			// console.log(q4);
			// output = await query(q4,con);
			// res.send({"status":"borrow request successfull","bid":bookid,"HBookId":HBookId[0].HBookId,"uid":userid});
			
		}
		else
		{
			 res.status(200).send({"output":"notloggedin"});
		}
		
	});
	app.post("/view-request-admin",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
        {
        	console.log("in fn");
        	var disp = req.body.disp;
        	if(disp)
        	{
        		var q = "select *,FirstName,LastName,BookName,BookAuthor from BorrowRequest,Student,BookDetail,BookAuthor where BorrowRequest.UserId=Student.UserId and BookDetail.BookId = BookAuthor.BookId and BookDetail.BookId = BorrowRequest.BookId";
        		console.log(q);
        		var result = await query(q,con);
        		res.status(200).send(result); 
        	}
        	else{
	        	var type = req.body.type;
	        	console.log("in else");
				if(type)
				{
					console.log("in type");
					var HBookId = req.body.hbookId;
					var UserId = req.body.userId;
					var q = "update CurrentBookStatus set issuedate = now(), EReturnDate = now()+interval 14 day,UserId = "
					 		+UserId+" where HBookId="+HBookId;
					var result = await query(q,con);

					var q1 ="delete from BorrowRequest where UserId ="+UserId+" and HBookId="+
							HBookId;
					var res1 = await query(q1,con);
					console.log(q1,res1);
					res.status(200).send({"output":"book issued"});
				}
				else
				{
					var HBookId = req.body.hbookId;
					var UserId = req.body.userId;
					var q1 ="delete from BorrowRequest where UserId ="+UserId+" and HBookId="+
							HBookId;
					var res1 = await query(q1,con);
					console.log(res1);
					res.send({"output":"book not issued"});
				}

			}
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});
}

module.exports={borrow:borrow};
