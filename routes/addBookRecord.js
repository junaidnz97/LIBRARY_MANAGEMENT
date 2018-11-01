const mysql = require('mysql');
var addBookRecord = function(app,con){

	const {query} = require('../database/db');

	app.post("/add-book-record",async(req,res)=>{
		if(req.session.adminusername && req.cookies.user_sid)
		{
      bookname = req.body.bname;
      booktype = req.body.btype;
      bookedition = req.body.bedition;
      quantity = req.body.quantity;
      bookdesc = req.body.bdesc;
      premium = req.body.premium;
      publisher = req.body.publisher;
      isbn = req.body.isbn;
      img_url_s = req.body.img_url_s;
      img_url_m = req.body.img_url_m;
      img_url_l = req.body.img_url_l;

      authors = req.body.authors;

      if(isbn != '')
      {
        var existing_book_query = "select * from BookDetail where ISBN=" + isbn ;
        var existing_book = await query(existing_book_query,con);
      }

      if (bookname == '')
      res.send("A book name is required.")

      else if(isbn == '')
      res.send("Book ISBN is required.")

      else if(quantity == '')
      res.send("Book quantity is required.")

      else if(existing_book.length != 0)
      res.send("Book already exists");

      else
      {
        if(booktype == '')
        booktype = "NULL";
        else {
          booktype = "'" + booktype + "'";
        }
        if(bookedition == '')
        bookedition = "NULL";
        if(bookdesc == '')
        bookdesc = "NULL";
        else {
          bookdesc = "'" + bookdesc + "'";
        }
        if(premium == '')
        premium = '0';
        if(publisher == '')
        publisher = "NULL";
        else {
          publisher = "'" + publisher + "'";
        }
        if(img_url_s == '')
        img_url_s = "NULL";
        else {
          img_url_s = "'" + img_url_s + "'";
        }
        if(img_url_m == '')
        img_url_m = "NULL";
        else {
          img_url_m = "'" + img_url_m + "'";
        }
        if(img_url_l == '')
        img_url_l = "NULL";
        else {
          img_url_l = "'" + img_url_l + "'";
        }



        var insert_query = "insert into BookDetail (BookName,BookType,BookEdition,TotalQuantity,AvailableQuantity,BookDescription,Premium,Publisher,ISBN,Img_url_s,Img_url_m,Img_url_l) values ("
        + bookname + "," + booktype + "," + bookedition + "," + quantity + "," + quantity + "," +
        bookdesc + "," + premium + "," + publisher + "," + isbn + "," + img_url_s + "," + img_url_m + "," + img_url_l + ");";
        var output = await query(insert_query,con);

        if(authors != '')
        {
          var author_list = authors.split(",");
          // res.send(author_list);
        }

        var i;
        var bookid_query = "select BookId from BookDetail where ISBN=" + isbn;
        // res.send(bookid_query);
        var bookid = await query(bookid_query,con);
        for(i=0;i<author_list.length;i++)
        {
          var author_insert_query = "insert into BookAuthor values (" + bookid[0].BookId + ",'" + author_list[i] +"');";
          console.log(author_insert_query);
          var output = await query(author_insert_query,con);
          // res.send(output);
        }

        for(i=0;i<quantity;i++)
        {
          var bookstatus_insert_query = "insert into CurrentBookStatus (BookId) values (" + bookid[0].BookId + ");";
          console.log(bookstatus_insert_query);
          var output = await query(bookstatus_insert_query,con);
          // res.send(output);
        }

        res.send("Book successfully added");
      }
		}
		else
		{
			res.send({"output":"notloggedin"});
		}

      //
      // var q = "insert into BookDetail values (" + bookid +");";
      // output = await query(q,con);
      // res.send(output);

  });
}

module.exports={addBookRecord:addBookRecord};
