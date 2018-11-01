const mysql = require('mysql');
var deleteBookRecord = function(app,con){

	const {query} = require('../database/db');

	app.post("/add-book-record",async(req,res)=>{
		// if(req.session.adminusername && req.cookies.user_sid)
		// {
    //
    //
    //
		// }
		// else
		// {
		// 	res.send({"output":"notloggedin"});
		// }
    bookid = req.body.bid;
    bookname = req.body.bname;
    booktype = req.body.btype;
    bookedition = req.body.bedition;
    quantity = req.body.quantity;
    bookdesc = req.body.bdesc;
    publisher = req.body.publisher;
    isbn = req.body.isbn;
    link = req.body.link;
    author = req.body.author;

    var existing_book_query = "select * from BookDetail where ISBN=" + isbn ;
    var existing_book = await query(existing_book_query,con);

    if(existing_book.length != 0)
      res.send("Book already exists");

    else {
      if(link == '')
      link = "NULL";
      if(publisher == '')
      publisher = "NULL";
      if(edition == '')
      edition = "NULL";
      if(author == '')
      author = "NULL";

      var q = "insert into BookDetail (BookName,BookType,BookEdition,TotalQuantity,AvailableQuantity,BookDescription,Premium,Publisher,ISBN,Img_url_s) values ("
      + bookname + "," + userid + "," + link + "," + publisher + "," + edition + "," + author +  ");";
      var output = await query(q,con);

      res.send("Book successfully added");
      //
      // var q = "insert into BookDetail values (" + bookid +");";
      // output = await query(q,con);
      // res.send(output);
	});
}

module.exports={deleteBookRecord:deleteBookRecord};
