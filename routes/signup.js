const mysql = require('mysql');
var signup=function(app,con)
{
const {query} = require('../database/db');
// var con = mysql.createConnection({
//     host: "us-cdbr-iron-east-01.cleardb.net",
//     user: "bfd712e27d3e0e",
//     password: "141a123b",
//     database:"heroku_2460774cb2e36e4",
// 	});

app.post("/signup",async(req,res)=>{


    /*
        Incase a new user needs to be registered,we can sign him/her up.
        We are not using this api since currently common api is being used.
     */

	var q='select count(*) as count from Authorization where UserName="'+req.body.username+'" or EmailId="'+req.body.emailid+'"';
	var x = await query(q,con);
	x = x[0].count;
	console.log(req.session);
	console.log(req.cookies);
	if(x==0)
	{
		var q='insert into Authorization(UserName,EmailId,Password) values("'+req.body.username+'","'+req.body.emailid+'","'+req.body.password+'")';
		resp = await query(q,con);
		req.session.username=req.body.username;
	 	res.send({"hello":"welcome"});	
	}		
	// con.query(query,function(err,resp){

	// 	if(err)
	// 		throw err;
	// 	x=JSON.parse(JSON.stringify(resp))[0].count;
	// 	console.log(req.session);

	// 	console.log(req.cookies);
	// 	if(x==0)
	// 	{
	// 		var query='insert into Authorization(UserName,EmailId,Password) values("'+req.body.username+'","'+req.body.emailid+'","'+req.body.password+'")';
	// 		con.query(query,function(err,resp2){
	// 			if(err)
	// 				throw err;
	// 			req.session.username=req.body.username;
	//  			res.send({"hello":"welcome"});	
	// 		});
	else
	{
		res.send("already present");
	}
});

app.post("/login",async(req,res)=>{

		//console.log(req.session.username);
		//console.log(req.cookies.user_sid);

		/*
			A temporary login function is used for testing purposes.
			If the details entered by the user is matched,it is going to make him loggedin.
		 */

		if(req.session.username && req.cookies.user_sid)
				res.send({"status":"already logged in"});
		else{
				var q = "select * from Authorization where UserName ='" + req.body.username + "' and Password = '"+req.body.password+"'";
				resp = await query(q,con);
				if(!resp.length)
					res.send({"error":"login unsuccessful"});
				else{
					req.session.username=req.body.username;
				 	req.session.adminusername=null;
				 	req.session.userid = resp[0].UserId;
				 	res.status(200).send({"success":"login successful"});
				}
				// con.query(q,function(err,resp){
				// 	if(err)
				// 		throw err;
				// 	if(!JSON.parse(JSON.stringify(resp)).length)
				// 		res.send("login unsuccessful");
				// 	else{

				// 	req.session.username=req.body.username;
				// 	req.session.adminusername=null;
				// 	res.send("login successful");
				// }
						
			}
});

app.post("/logout",function(req,res){

			/*
				A logout function.
				When a user wishes to logout, the cookies stored are cleared.
			 */
			res.clearCookie('user_sid');
			res.status(200).send({"output":"logout successful"});
});

app.get("/",function(req,res){

		res.send("sadygadsyu");
});

}

module.exports={signup:signup};