const mysql = require('mysql');
var requestBook = function(app,con){

	const {query} = require('../database/db');


	app.post("/request-book",async(req,res)=>{
		// if(req.session.username && req.cookies.user_sid)
		{
      bookname = req.body.bname;
      userid = req.body.userid;
      link = req.body.link;
      publisher = req.body.publisher;
      edition = req.body.edition;
      author = req.body.author;

			var existing_book_query = "select * from BookDetail where BookName=" + bookname ;
			var existing_book = await query(existing_book_query,con);

			var existing_request_query = "select * from RequestedBook where BookName=" + bookname ;
			var existing_request = await query(existing_request_query,con);

			if(existing_book.length != 0)
				res.send("Book already exists");
			else if(existing_request != 0)
				res.send("Book already requested");
			else {
				if(link == '')
				link = "NULL";
				if(publisher == '')
				publisher = "NULL";
				if(edition == '')
				edition = "NULL";
				if(author == '')
				author = "NULL";

				var q = "insert into RequestedBook (BookName,UserId,Link,Publisher,Edition,Author) values ("
				+ bookname + "," + userid + "," + link + "," + publisher + "," + edition + "," + author +  ");";
				var output = await query(q,con);

				res.send("Book request successful");
			}




    	// console.log(q);
		}
		// else
		// {
		// 	res.send({"output":"notloggedin"});
		// }
	});

}

module.exports={requestBook:requestBook};
