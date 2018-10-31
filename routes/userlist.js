const mysql = require('mysql');
var userList = function(app,con){

	const {query} = require('../database/db');

	app.get("/view-user-list",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
			var q = "select * from Student";
			var result = await query(q,con);
			res.send({"users":result});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});

}

module.exports = {userList:userList};