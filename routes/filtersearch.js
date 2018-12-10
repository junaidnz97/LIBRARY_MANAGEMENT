const mysql = require('mysql');
var filtersearch=function (app,con) {

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

    app.get("/filtersearch",async(req,res)=> {
       // if(req.session.username && req.cookies.user_sid)
        {
            console.log(req.query);
            /*
                bookid is passed along with the request
             */

            var year1=req.query.year1;
            var year2=req.query.year2;

            var q= "select * from BookDetail where BookEdition>"+year1 +" and BookEdition<"+year2;
            console.log(query);

            var finalresp = await query(q,con);
            finalresp=JSON.parse(JSON.stringify(finalresp));
            res.send(finalresp);

        }
        /*else
        {

            res.status(200).send({"output":"notloggedin"});
        }*/

    });


};

module.exports={filtersearch:filtersearch};