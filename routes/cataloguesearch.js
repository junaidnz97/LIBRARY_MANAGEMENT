/*
    This function is used to search for book details.
    Full-Text search is done on basis of BookName,Publisher,Author,Description,Edition
 */
const mysql = require('mysql');

var cataloguesearch = function (app,con,client) {

    app.get("/cataloguesearch",async function (req,res) {


                const {query} = require('../database/db');

                var q = req.query.query;
                var arr = q.split("-");
                arr[0] = arr[0].trim();
                arr[1] = arr[1].trim();
                console.log(arr);

                var q = "select * from BookDetail where BookEdition>" + arr[0] + " and BookEdition<" + arr[1] ;
                console.log(q);

                var finalresp = await query(q, con);

                finalresp = JSON.parse(JSON.stringify(finalresp));

                console.log(finalresp);

                res.send(finalresp);
            //}


        /*console.log(req.query);

        var searchquery=req.query.query;



        client.search({
            index: 'myindex',
            type: 'mytype',
            body: {
                query: {
                    match: {
                        _all: searchquery
                    }
                }
            }
        }).then(function (resp) {
            var hits = resp.hits.hits;
            console.log(hits);
            let result = hits.map(a => a._source);
            res.send(result);
        }, function (err) {
            console.trace(err.message);
            res.redirect("/catalogue");
        });*/


    });

};

module.exports={
    cataloguesearch:cataloguesearch

}



