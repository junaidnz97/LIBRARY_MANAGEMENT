// const mysql = require('mysql');

const query = (query,con) => {
//     var con = mysql.createConnection({
//     host: "us-cdbr-iron-east-01.cleardb.net",
//     user: "bfd712e27d3e0e",
//     password: "141a123b",
//     database:"heroku_2460774cb2e36e4",
// });
//     }).connect(function(err) {
//     if (err) throw err;
//     console.log('Connected to the database')

// });;

    return new Promise((resolve, reject) => {
            con.query(query, function (err, result) {
                // try  { con1.end(); }
                // catch (e) {
                //     console.log(e)
                // }
                if (err) reject(err);
                resolve(result);
        });
    })
}

module.exports = {query}