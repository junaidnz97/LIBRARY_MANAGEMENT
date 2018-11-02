const mysql = require('mysql');
var booksummary=function (app,con) {

    /*
        Function to return the details of a book

     */
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
            /*
                bookid is passed along with the request
             */

            var bookId=req.query.bookId;
            var q="select * from BookDetail where BookId="+bookId;
            console.log(q);

            /*
                The query is run and output is stored in the variable final response
             */

            var finalresp = await query(q,con);
            finalresp=JSON.parse(JSON.stringify(finalresp));

            /*
                Since the Book Authors can be multiple,Author is stored in a seperate table
                and a query is  run to get the autor details of the respective book
             */

            q="select BookAuthor from BookAuthor where BookId = "+bookId;
            console.log(q);
            var authorresp=await query(q,con);
            authorresp=JSON.parse(JSON.stringify(authorresp));

            /*
                The author details is added to the final response Json object
             */

            finalresp[0].authors=authorresp;
            //for(var i=0;i<authorresp.length;i++);
             //   finalresp[0].authors.push(authorresp[i]);
            //console.log(authorresp);
            //console.log(authorresp[0]);

            /*

             */
            q = "select count(*) as count from BookLogTrigger where UId="+req.session.userid+" and DOR is NULL";
            var count1 = await query(q,con);
            q = "select count(*) as count from BorrowRequest where UserId="+req.session.userid;
            console.log(q);
            var count2 = await query(q,con)
            res.status(200).send({"BookDetails":finalresp,"CurrentBookCount":count1[0].count+count2[0].count});
            // con.query(query,function (err,response) {

            //     if(err)
            //         res.send({"output":"error"});

            //     var finalresp = JSON.parse(JSON.stringify(response));
            //     res.send(finalresp);
            // });
        }
        else
        {

            res.status(200).send({"output":"notloggedin"});
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
           res.status(200).send({"details":result});
           // con.query(q,function(err,resp){
           //      if(err)
           //          throw err;
           //      var result = JSON.parse(JSON.stringify(resp));
           //      res.send({"details":result});
           // });

        }
        else
        {
            res.status(200).send({"output":"notloggedin"});
        } 
    });
    

};

module.exports={booksummary:booksummary};