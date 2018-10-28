const mysql = require('mysql');

const query = (query,con) => {

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