var mysql=require("mysql");

var con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b73de7b8cfffd5",
    password: "ca0b7d3f",
    database: "heroku_c9028d96deb4c64"
  	});

con.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the database')

});
