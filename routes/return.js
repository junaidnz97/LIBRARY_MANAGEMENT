const mysql = require('mysql');
var returnbook = function(app,con){

	const {query} = require('../database/db');
	
	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.post("/return",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
        {
			bookid = req.body.bookId;
			hbookid = req.body.hbookId;
			userid = req.session.userid;
			var q = "select * from BookLogTrigger where HId = "+hbookid +" and DOR is NULL";
			var pass = await query(q,con)
			if(!pass.length){
				res.status(200).send({"status":"not found in history"});
			}
			else{
				var q0 = "update BookLogTrigger set DOR = NOW() where HId = "+hbookid +" and DOR is NULL";
				var r0 = await query(q0,con);
				var q2 = "select DuesGenerated from CurrentBookStatus where HBookId ="+hbookid;
				console.log(q2);
				var r2 = await query(q2,con);
				console.log(r2.length);
				console.log(r0);
				var q1 = "update CurrentBookStatus set IssueDate =NULL,EReturnDate = NULL, UserId = NULL,DuesGenerated=0 where HBookId ="+hbookid;
				var r1 = await query(q1,con);
				console.log(r1);
				var q3 = "update BookDetail set AvailableQuantity = AvailableQuantity + 1 where BookId="+bookid;
				var result = await query(q3,con);

				if(r2.length)
				{
					res.status(200).send({"DuesGenerated": r2.DuesGenerated,"status":"return successfull"});
				}
				else{
					res.status(200).send({"status":"return successfull"});
				}
				
			}

		}
		else
		{
			 res.status(200).send({"output":"notloggedin"});
		}
		
	});
}

module.exports={returnbook:returnbook};
