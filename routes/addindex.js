//var addindex=function (app,con,client) {
/*
    A simple nodejs script to index the book details to elastic search.
    This block of code won't run along with the project,but has to be ran
    seperately incase any data loss happens in elastic search.
 */

var mysql=require("mysql");
        /*
            Creating mysql connection
         */
        var con = mysql.createPool({
            host: "addbinstance2.cfdhbd9aqiv2.us-east-1.rds.amazonaws.com",
            user: "AdMenon",
            password: "qwertyuiop",
            database:"LibraryManagement",

        });

        var elasticsearch=require("elasticsearch");
        /*
            Connecting to elastic search
         */
        var client=new elasticsearch.Client({

            host: "localhost:9200",
            log : "trace"
        });

        /*
            Checking if the connection got added successfully or if the cluster is down.
         */

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

        /*
            Running the query to get bookdetails
         */

        var query = "select *,BookAuthor from BookDetail,BookAuthor where BookDetail.BookId = BookAuthor.BookId";
        con.query(query, function (err, resp) {

            resp=JSON.parse(JSON.stringify(resp));
            console.log(resp.length);

            /*
                Each row of the returned details is converted into
                a JSON object and is indexed into elasticsearch under the index 'myindex'
                and type 'mytype'
             */

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
                        BookAuthor: resp[i].BookAuthor,
                        Img_url_m:resp[i].Img_url_m}


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
    "mytype": {
        "include_in_all": false,
            "properties": {
            "BookName": { "type": "text", "include_in_all": true },
            "BookType ":{"type": "text", "include_in_all": true  },
            "BookEdition": { "type": "text", "include_in_all": true },
            "BookDescription": { "type": "text", "include_in_all": true },
            "Publisher ":{"type": "text", "include_in_all": true  },
            "BookAuthor": { "type": "text", "include_in_all": true },
            "Img_url_m" :{"type": "text", "include_in_all": false }

        }
    }
}
}*/