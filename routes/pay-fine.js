var pay_fine = function(app,urlencodedParser,con){


	app.post("/fine-amount",urlencodedParser,function(req,res){
		if(req.session.username && req.cookies.user_sid)
		{
			userId = req.body.userId;
			var q = "select Dues from Student where UserId="+userId;
			console.log(q);
			con.query(q,function(err,resp){
				if(err)
					throw err;
				var dues = JSON.parse(JSON.stringify(resp))[0];
				console.log(dues);
				var q1 = "select * from CurrentBookStatus,(select BookId,BookName from BookDetail) as T where UserId = "+
							userId + " and DuesGenerated > 0 and DuesPaid = 0 and T.BookId = CurrentBookStatus.BookId";
				console.log(q1);
				con.query(q1,function(err,resp1){
					if(err)
						throw err;
					var result = JSON.parse(JSON.stringify(resp1));
					console.log(result);
					res.send({"DueAmount":dues,"Details":result});
				}); 
			});
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