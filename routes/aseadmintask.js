/*
    This function is used to search for book details.
    Full-Text search is done on basis of BookName,Publisher,Author,Description,Edition
 */
const mysql = require('mysql');

var aseadmintask = function (app,con,client) {

    app.get("/aseadmintask",async function (req,res) {

        console.log("hello");

        const {query} = require('../database/db');

        var q1 = req.query.query1;
        var q2 = req.query.query2;

        console.log(q1,q2);
        var finalresp={};
        /*console.log(q);
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
        */
        var q;
        q = "select * from BookDetail where BookEdition>" + q1 + " and BookEdition<" + q2 ;
        console.log(q);

        var finalresp = await query(q, con);

        finalresp = JSON.parse(JSON.stringify(finalresp));

        console.log(finalresp);

        res.send(finalresp);

    });
};

module.exports={
    aseadmintask:aseadmintask

};



