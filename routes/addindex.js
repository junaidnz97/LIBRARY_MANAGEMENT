//var addindex=function (app,con,client) {
var mysql=require("mysql");
        var con = mysql.createPool({
            host: "addbinstance2.cfdhbd9aqiv2.us-east-1.rds.amazonaws.com",
            user: "AdMenon",
            password: "qwertyuiop",
            database:"LibraryManagement",

        });

        var elasticsearch=require("elasticsearch");
        var client=new elasticsearch.Client({

            host: "localhost:9200",
            log : "trace"
        });

        client.ping({
            // ping usually has a 3000ms timeout
            requestTimeout: 1000
        }, function (error) {
            if (error) {
              console.trace('elasticsearch cluster is down!');
            } else {
                console.log('All is well');
            }
        });

        var query = "select *,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId = BookAuthor.BookId";
        con.query(query, function (err, resp) {

            resp=JSON.parse(JSON.stringify(resp));
            console.log(resp.length);
            for(var i =0;i<resp.length;i++)
            {

                client.create({
                    index: 'myindex',
                    type: 'mytype',
                    id: i,
                    body: {
                        BookName: resp[i].BookName,
                        BookType: resp[i].BookType,
                        BookEdition: resp[i].BookEdition,
                        BookDescription: resp[i].BookDescription,
                        Publisher: resp[i].Publisher,
                        BookAuthor: resp[i].BookAuthor }


                }).then(function (body) {

                    console.log(i);
                },function (error) {

                    console.log("error");
                });
            }

              //  console.log(resp[i]);
            //console.log(resp);
        });




//};

//module.exports={
  //  addindex:addindex
//};

/*
{
    "mappings": {
    "user": {
        "include_in_all": false,
            "properties": {
            "BookName": { "type": "text", "include_in_all": true },
            "BookType "type": "integer" },
            "BookEdition": { "type": "text", "include_in_all": false },
            "BookDescription": { "type": "text", "include_in_all": true },
            "Publisher ":{"type": "integer" },
            "BookAuthor": { "type": "text", "include_in_all": false },

        }
    }
}
}*/