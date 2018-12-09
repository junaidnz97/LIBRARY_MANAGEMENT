/*
    This function is used to search for book details.
    Full-Text search is done on basis of BookName,Publisher,Author,Description,Edition
 */
const mysql = require('mysql');

var cataloguefilter = function (app,con,client) {

    app.get("/cataloguefilter",async function (req,res) {

         console.log("hello");

         const {query} = require('../database/db');

         var q = req.query.query;
         console.log(q);
         var arr = q.split("-");
         arr[0] = arr[0].trim();
         arr[1] = arr[1].trim();
         console.log(arr);

          q = "select * from BookDetail where BookEdition>" + arr[0] + " and BookEdition<" + arr[1] ;
         console.log(q);

         var finalresp = await query(q, con);

         finalresp = JSON.parse(JSON.stringify(finalresp));

         console.log(finalresp);

         console.log(finalresp);

         res.send(finalresp);

    });
};

module.exports={
    cataloguefilter:cataloguefilter

};



