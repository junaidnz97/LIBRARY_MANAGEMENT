var updateBookRecord = function(app,urlencodedParser,con){

	app.post("/update-book-record",urlencodedParser,function(req,res){
		if(req.session.adminusername && req.cookies.user_sid)
		{
      bookid = req.body.bid;
      bookname = req.body.bname;
      booktype = req.body.btype;
      bookedition = req.body.bedition;
      quantity = req.body.quantity;
      // bookdesc = req.body.bdesc;
      premium = req.body.premium;

			console.log(bookid);
			console.log(bookname);
			console.log(booktype);
			console.log(bookedition);
			console.log(quantity);
			// console.log(bookdesc);
			console.log(premium);

      var param = 'BookId=' + bookid;

      if(bookname != '')
        param += ',BookName=' + "'" + bookname + "'";
      if(booktype != '')
        param += ',BookType=' + "'" + booktype + "'" ;
      if(bookedition != '')
        param += ',BookEdition=' + bookedition;
      if(quantity != '')
        param += ',TotalQuantity=' + quantity;
      // if(bookdesc != '')
        // param += ',BookDescription=' + bookdesc;
      if(premium != '')
        param += ',Premium=' + premium;

			console.log(param);


			var q = "update BookDetail set " + param + " where BookId=" + bookid;
			console.log(q);
			con.query(q,function(err,resp){
				if(err)
					throw err;
				output = JSON.parse(JSON.stringify(resp));
				
				res.send(output);
			});
		}
		else
		{
			res.send({"output":"notloggedin"});
		}
	});
}

module.exports={updateBookRecord:updateBookRecord};
