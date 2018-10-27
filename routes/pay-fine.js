var pay_fine = function(app,urlencodedParser,con){
const {query} = require('../database/db');
	var qpromise = (uid,hid) => {
		return new Promise((resolve,reject) =>{
			if(uid != undefined && hid != undefined)
			{
				
				con.query(q,function(err,resp){
						console.log(q);
						if(err)
							throw err;
						resolve(resp);
				});
			}
			else{
				reject("error");
			}
		})
	}
	app.post("/fine-amount",urlencodedParser,async(req,res)=>{
		if(req.session.username && req.cookies.user_sid)
		{
			userId = req.body.userId;
			var q = "select Dues from Student where UserId="+userId;
			console.log(q);
			var dues = await query(q,con);
			var q1 = "select * from DuesDetail where UserId ="+userId+
						" and DuesPaid = 0";
			let result = await query(q1,con);
			console.log(result);
			var Details = [];
			for (let i of result) {
				console.log(i.HbookId);
				var q2 = "select * from CurrentBookStatus,"+
						"(select BookName,BookId from BookDetail) as T"+
						" where UserId=" + userId +
						" and CurrentBookStatus.HBookId="+ i.HbookId +
						" and CurrentBookStatus.BookId=T.BookId";		
				console.log(q2);
				Details.push(await query(q2,con));
			}
				console.log(Details);
				res.send({"Dues":dues,"Details":Details});
			// con.query(q,function(err,resp){
			// 	if(err)
			// 		throw err;
			// 	var dues = JSON.parse(JSON.stringify(resp))[0];
			// 	console.log(dues);
			// 	var q1 = "select * from DuesDetail where UserId ="+userId+
			// 			" and DuesPaid = 0"
			// 	con.query(q1,function(err,resp1){
			// 		if(err)
			// 			throw err;
			// 		var result = JSON.parse(JSON.stringify(resp1));
			// 		console.log(result);
			// 		//setTimeout(function(){
			// 		var Details = [];
			// 			for (var i = 0; i < result.length; i++) {
			// 				console.log(result[i].HbookId);

			// 				qpromise(userId,result[i].HbookId).then((res)=>{
			// 					console.log(res);
			// 					var output = JSON.parse(JSON.stringify(res))[0];
			// 					Details.push(output)
			// 				},(err)=>{
			// 					console.log(err);
			// 				});
			// 			}
			// 			setTimeout(()=>{res.send({"Dues":dues,"details":Details});},5000);
			// 		//},500);
			// 	});




			// 	/*var q1 = "select * from CurrentBookStatus,(select BookId,BookName from BookDetail) as T where UserId = "+
			// 				userId + " and DuesGenerated > 0 and DuesPaid = 0 and T.BookId = CurrentBookStatus.BookId";
			// 	console.log(q1);
			// 	con.query(q1,function(err,resp1){
			// 		if(err)
			// 			throw err;
			// 		var result = JSON.parse(JSON.stringify(resp1));
			// 		console.log(result);
			// 		res.send({"DueAmount":dues,"Details":result});
			// 	});*/ 
			// });
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	app.post("/pay-fine",urlencodedParser,function(req,res){
		if(req.session.adminusername && req.cookies.user_sid)
		{
			userId = req.body.userId;
			dueAmount = req.body.DueAmount;
			paidAmount = req.body.PaidAmount;
			paymentMethod = req.body.PaymentMethod;
			var q0 = "update student set Dues = Dues - "+paidAmount
					+" where UserId = " + userId;
			console.log(q0);
			con.query(q0,function(err,resp0){
				if(err)
					throw err;
				console.log(resp0);

				var q1 = "insert into DuesBill(UserId,AmountPaid,PaymentMethod,Timestamp) values ("+
						userId+","+paidAmount+","+paymentMethod+",NOW())";
				console.log(q1);
				con.query(q1,function(err,resp1){
					if(err)
						throw err;
					console.log(resp1);
					res.send("payment successfully recorded");
				});

				
			});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
	
}

module.exports={pay_fine:pay_fine};