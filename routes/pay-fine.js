const mysql = require('mysql');
var pay_fine = function(app,con){
	const {query} = require('../database/db');

	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.post("/fine-amount",async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			userId = req.session.userid;
			var q = "select Dues from Student where UserId="+userId;
			console.log(q);
			var dues = await query(q,con);
			var q1 = "select * from CurrentBookStatus where UserId ="+userId+
						" and DuesGenerated > 0";
			var Details = [];
			Details.push(await query(q1,con));
			// let result = await query(q1,con);
			// console.log(result);
			// var Details = [];
			// for (let i of result) {
			// 	console.log(i.HbookId);
			// 	var q2 = "select * from CurrentBookStatus,"+
			// 			"(select BookName,BookId from BookDetail) as T"+
			// 			" where UserId=" + userId +
			// 			" and CurrentBookStatus.HBookId="+ i.HbookId +
			// 			" and CurrentBookStatus.BookId=T.BookId";		
			// 	console.log(q2);
			// 	Details.push(await query(q2,con));
			// }
			// 	console.log(Details);
				res.send({"Dues":dues,"Details":Details});
			
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	app.post("/pay-fine",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
			userId = req.session.userid;
			dueAmount = req.body.DueAmount;
			paidAmount = req.body.PaidAmount;
			paymentMethod = req.body.PaymentMethod;
			var q0 = "update student set Dues = Dues - "+paidAmount
					+" where UserId = " + userId;
			console.log(q0);
			let resp0 = await query(q0,con);
			var q1 = "insert into DuesBill(UserId,AmountPaid,PaymentMethod,Timestamp) values ("+
						userId+","+paidAmount+","+paymentMethod+",NOW())";
			console.log(q1);
			let resp1 = await query(q1,con);
			console.log(resp1);
			res.send("payment successfully recorded");
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	
}

module.exports={pay_fine:pay_fine};