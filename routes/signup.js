var signup=function(app,urlencodedParser,con)
{

app.post("/signup",urlencodedParser,function(req,res){

	var query='select count(*) as count from Authorization where UserName="'+req.body.username+'" or EmailId="'+req.body.emailid+'"';
	var x=0;
	con.query(query,function(err,resp){

		if(err)
			throw err;
		x=JSON.parse(JSON.stringify(resp))[0].count;
		
		if(x==0)
		{
			var query='insert into Authorization(UserName,EmailId,Password) values("'+req.body.username+'","'+req.body.emailid+'","'+req.body.password+'")';
			con.query(query,function(err,resp2){
				if(err)
					throw err;
				req.session.username=req.body.username;
	 			res.send({"hello":"welcome"});	
			});
		}
		else
		{
			res.send("already present");
		}
	});
});

app.post("/login",urlencodedParser,function(req,res){

		if(req.session.username && req.cookies.user_sid)
				res.send("already logged in");
		else{
				var q = "select * from Authorization where UserName ='" + req.body.username + "' and Password = '"+req.body.password+"'";
				con.query(q,function(err,resp){
					if(err)
						throw err;
					if(!JSON.parse(JSON.stringify(resp)).length)
						res.send("login unsuccessful");
					else{
					req.session.username=req.body.username;
					res.send("login successful");
				}
						
				});
		}
		
});

app.post("/logout",urlencodedParser,function(req,res){

			res.clearCookie('user_sid');
			res.send("logut successful");

});

app.get("/",function(req,res){

		res.send("sadygadsyu");
});

}

module.exports={signup:signup};