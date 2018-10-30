const mysql = require('mysql');
var shareBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.post("/share-book-request",async(req,res)=>{
    if(req.session.username && req.cookies.user_sid)
    {
      bookid = req.body.bid;
      userid_sender = req.body.uid_sender;
      userid_reciever = req.body.uid_reciever;

      var sender_info_query = "select * from Student where UserID=" + userid_sender;
      var sender_info = await query(sender_info_query,con);
      var book_info_query = "select * from BookDetail where BookId=" + bookid;
      var book_info = await query(book_info_query,con);

      content = sender_info[0].FirstName + " " + sender_info[0].LastName + " (S" + sender_info[0].RollNumber + ") wants to borrow the book - " + book_info[0].BookName + " from you.";
      var notification_query = "insert into Notification (content,UserId) values ('" + content + "'," + userid_reciever + ")";
      var output = await query(notification_query,con);
      res.send(output);
      console.log(notification_query);

    }
    else
    {
      res.send({"output":"notloggedin"});
    }


  });

}

module.exports={shareBookRequest:shareBookRequest};
