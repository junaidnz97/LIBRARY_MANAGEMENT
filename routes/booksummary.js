var booksummary=function (app,urlencodedParser,con) {

    app.get("/booksummary",function (req,res) {
        if(req.session.username && req.cookies.user_sid)
        {
            console.log(req.query);
            var bookId=req.query.bookid;
            var query="select * from BookDetail where BookId="+bookId;
            con.query(query,function (err,response) {

                if(err)
                    res.send({"output":"error"});

                var finalresp = JSON.parse(JSON.stringify(response));
                res.send(finalresp);
            });
        }
        else
        {

            res.send({"output":"notloggedin"});
        }

    });
    app.get("/review",function(req,res){
       if(req.session.username && req.cookies.user_sid)
        {
           console.log(req.query);
           var bookId = req.query.bookId;
           var q = "select * from RatingAndReview,(select UserId,UserName from Student) as T where BookId="+bookId+
                    " and T.UserId=RatingAndReview.UserId";
           console.log(q);
           con.query(q,function(err,resp){
                if(err)
                    throw err;
                var result = JSON.parse(JSON.stringify(resp));
                res.send({"details":result});
           });

        }
        else
        {
            res.send({"output":"notloggedin"});
        } 
    });

};

module.exports={booksummary:booksummary};