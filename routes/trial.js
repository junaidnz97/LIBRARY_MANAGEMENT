const mysql = require('mysql');
var trial = function(app,con){

	const {query} = require('../database/db');

	app.get("/trial",async(req,res)=>{
		if(1)//req.session.adminusername && req.cookies.user_sid)
		{
            console.log(req.query)
            var start = req.query.start;
            var end = req.query.end;
            var q = "select * from Student where UserId between "+start+" and "+end +" order by Rollnumber asc" ;
            console.log(q);
            var result = await query(q,con);
            console.log(result);
			res.status(200).send({"users":result});
		}
		else
		{
			console.log("in else");
			res.status(200).send({"output":"notloggedin"});
		}
	});

}

module.exports = {trial:trial};