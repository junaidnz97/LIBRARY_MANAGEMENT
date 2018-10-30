const mysql = require('mysql');
var shareBookRequest = function(app,con){

	const {query} = require('../database/db');


	app.get("/share-book-request",async(req,res)=>{



  });

}

module.exports={shareBookRequest:shareBookRequest};
