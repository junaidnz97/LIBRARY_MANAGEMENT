const mysql = require('mysql');

const {query} = require('./db.js');
var con = mysql.createPool({
    host: "addbinstance2.cfdhbd9aqiv2.us-east-1.rds.amazonaws.com",
    user: "AdMenon",
    password: "qwertyuiop",
    database:"LibraryManagement",

});

const ins = async()=>{
	var res = await query("select BookId from BookDetail",con);
	console.log(res[0]);
	for(var i = 0; i<68;i++){
		for(var j = 0 ; j<10;j++)
		{
			var q = "insert into CurrentBookStatus(BookId) values ("+res[i].BookId+")";
			//console.log(q);
			var op = await query(q,con);
		}
	}
	console.log("success");
}

ins();
