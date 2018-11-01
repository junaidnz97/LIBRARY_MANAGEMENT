const mysql = require('mysql');
var booksummary=function (app,con) {

    const {query} = require('../database/db');
    
    // var con = mysql.createConnection({
    // host: "us-cdbr-iron-east-01.cleardb.net",
    // user: "bfd712e27d3e0e",
    // password: "141a123b",
    // database:"heroku_2460774cb2e36e4",
    // });

    app.get("/booksummary",async(req,res)=> {
        if(req.session.username && req.cookies.user_sid)
        {
            console.log(req.query);
            var bookId=req.query.bookid;
            var q="select * from BookDetail where BookId="+bookId;
            var finalresp = await query(q,con);
            finalresp=JSON.parse(JSON.stringify(finalresp));
            q="select BookAuthor from bookauthor where BookId = "+bookId;
            var authorresp=await query(q,con);
            authorresp=JSON.parse(JSON.stringify(authorresp));
            finalresp[0].authors=authorresp;
            //for(var i=0;i<authorresp.length;i++);
             //   finalresp[0].authors.push(authorresp[i]);
            //console.log(authorresp);
            //console.log(authorresp[0]);
            res.send(finalresp);
            // con.query(query,function (err,response) {

            //     if(err)
            //         res.send({"output":"error"});

            //     var finalresp = JSON.parse(JSON.stringify(response));
            //     res.send(finalresp);
            // });
        }
        else
        {

            res.send({"output":"notloggedin"});
        }

    });
    app.get("/review",async(req,res)=>{
       if(req.session.username && req.cookies.user_sid)
        {
           console.log(req.query);
           var bookId = req.query.bookId;
           var q = "select * from RatingAndReview,(select UserId,FirstName,LastName from Student) as T where BookId="+bookId+
                    " and T.UserId=RatingAndReview.UserId";
           console.log(q);
           var result = await query(q,con);
           res.send({"details":result});
           // con.query(q,function(err,resp){
           //      if(err)
           //          throw err;
           //      var result = JSON.parse(JSON.stringify(resp));
           //      res.send({"details":result});
           // });

        }
        else
        {
            res.send({"output":"notloggedin"});
        } 
    });
    

};

module.exports={booksummary:booksummary};