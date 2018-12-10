const mysql = require('mysql');
var totalfine=function (app,con) {

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

    app.get("/totalfine",async(req,res)=> {
      //  if(req.session.username && req.cookies.user_sid)
        {
            var q = "select sum(Dues) as totaldues from Student";
            console.log(q);
            var output = await query(q,con);
            output=JSON.parse(output)[0];
            console.log(output);
            res.send(output);
        }
    });
    

};

module.exports={totalfine:totalfine};