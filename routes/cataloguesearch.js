var cataloguesearch = function (app,con,client) {

    app.get("/cataloguesearch",function (req,res) {
        console.log(req.query);

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
        });
    });

};

module.exports={
    cataloguesearch:cataloguesearch

}



