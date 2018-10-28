const mysql = require('mysql');
var updateBookRecord = function(app,con){

	const {query} = require('../database/db');

	// var con = mysql.createConnection({
 //    host: "us-cdbr-iron-east-01.cleardb.net",
 //    user: "bfd712e27d3e0e",
 //    password: "141a123b",
 //    database:"heroku_2460774cb2e36e4",
	// });

	app.post("/update-book-record",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
      bookid = req.body.bid;
      bookname = req.body.bname;
      booktype = req.body.btype;
      bookedition = req.body.bedition;
      quantity = req.body.quantity;
      bookdesc = req.body.bdesc;
      premium = req.body.premium;

      var param = 'BookId=' + bookid;

      if(bookname != '')
        param += ',BookName=' + "'" + bookname + "'";
      if(booktype != '')
        param += ',BookType=' + "'" + booktype + "'" ;
      if(bookedition != '')
        param += ',BookEdition=' + bookedition;
      if(quantity != '')
        param += ',TotalQuantity=' + quantity;
      if(bookdesc != '')
        param += ',BookDescription=' + bookdesc;
      if(premium != '')
        param += ',Premium=' + premium;

			console.log(param);


			var q = "update BookDetail set " + param + " where BookId=" + bookid;
			console.log(q);
			output = await query(q,con);
			res.send(output);
			// con.query(q,function(err,resp){
			// 	if(err)
			// 		throw err;
			// 	output = JSON.parse(JSON.stringify(resp));

			// 	res.send(output);
			// });
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={updateBookRecord:updateBookRecord};
