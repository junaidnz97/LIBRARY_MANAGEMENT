/*
    This function is used to search for book details.
    Full-Text search is done on basis of BookName,Publisher,Author,Description,Edition
 */

var cataloguesearch = function (app,con,client) {

    app.get("/cataloguesearch",function (req,res) {
        console.log(req.query);

        var searchquery=req.query.query;
        /*
            The query passed by user is saved into the variable search query and
            is searched on the _all field of elastic search.
            Multiple documents of data is returned and is saved into the variable result
            and is returned to user.
         */
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
        });
    });

};

module.exports={
    cataloguesearch:cataloguesearch

}



