/*
    This function is used to search for book details.
    Full-Text search is done on basis of BookName,Publisher,Author,Description,Edition
 */
const mysql = require('mysql');

var aseadmintask = function (app,con,client) {

    app.get("/aseadmintask",async function (req,res) {

        // console.log("hello");

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
        q = "select UserId from Student where UserName='" + q1 + "'";
        // console.log(q);

        var StudentId1 = await query(q, con);
        StudentId1 = JSON.parse(JSON.stringify(StudentId1));
        StudentId1 = StudentId1[0].UserId;
        console.log(StudentId1);

        var list_query = "select UserId from CurrentBookStatus where BookId=" + q2 + " and  UserId" + " order by IssueDate asc";
        console.log(list_query);

        var StudentId2 = await query(list_query,con);
        StudentId2 = JSON.parse(JSON.stringify(StudentId2));
        StudentId2 = StudentId2[0].UserId;
        console.log(StudentId2);


        var insert_query;
        insert_query = "insert into ReserveBook values (" + q2 + "," + StudentId1 + "," + StudentId2 + ");";
        console.log(insert_query);

        var finalresp = await query(insert_query, con);

        finalresp = JSON.parse(JSON.stringify(finalresp));


        console.log(finalresp);

        var list_query;
        list_query = "select * from ReserveBook";

        var request_list = await query(list_query, con);

        request_list = JSON.parse(JSON.stringify(request_list));


        console.log(request_list);


        res.send(request_list);

    });
};

module.exports={
    aseadmintask:aseadmintask

};
