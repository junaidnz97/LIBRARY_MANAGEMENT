const mysql = require('mysql');
var shareBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.post("/share-book-request",async(req,res)=>{

    bookid = req.body.bid;
    userid_sender = req.body.uid_sender;
    userid_reciever = req.body.uid_reciever;

    // console.log(req.session);

    var sender_info_query = "select * from Student where UserID=" + userid_sender;
    // console.log(sender_info_query);
    var sender_info = await query(sender_info_query,con);
    // console.log(sender_info);
    // sender_info=JSON.parse(JSON.stringify(sender_info));
    var book_info_query = "select * from BookDetail where BookId=" + bookid;
    var book_info = await query(book_info_query,con);
    // console.log(book_info);

    // console.log(sender_info);
    content = sender_info[0].FirstName + " " + sender_info[0].LastName + " (S" + sender_info[0].RollNumber + ") wants to borrow the book - " + book_info[0].BookName + " from you.";
    var notification_query = "insert into Notification (content,UserId) values ('" + content + "'," + userid_reciever + ")";
    // var q = "select * from Student where UserID in (select UserId from CurrentBookStatus where BookId=" + bookid  + ");";
    var output = await query(notification_query,con);
    res.send(output);
    console.log(notification_query);


    // if(output.length == 0)
    //     res.send({"status":"No issued books found"});
    //   else
    //     res.send({"user-details":output});

  });

}

module.exports={shareBookRequest:shareBookRequest};
