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

    })

};

module.exports={booksummary:booksummary};