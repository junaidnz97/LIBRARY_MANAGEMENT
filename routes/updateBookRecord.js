var updateBookRecord = function(app,urlencodedParser,con){

	app.post("/update-book-record",urlencodedParser,function(req,res){
		if(req.session.username && req.cookies.user_sid)
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
        param += ',BookName=' + bookname;
      if(booktype != '')
        param += ',BookType=' + booktype;
      if(bookedition != '')
        param += ',BookEdition=' + bookedition;
      if(quantity != '')
        param += ',TotalQuantity=' + quantity;
      if(bookdesc != '')
        param += ',BookDescription=' + bookdesc;
      if(premium != '')
        param += ',Premium=' + premium;


			var q = "update BookDetail set " + param;
			con.query(q,function(err,resp){
				if(err)
					throw err;
				output = JSON.parse(JSON.stringify(resp));
				if(output.length == 0)
					res.send("No books found");
				else
					res.send({"book-details":output});
			});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={updateBookRecord:updateBookRecord};
