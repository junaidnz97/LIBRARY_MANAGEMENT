var apilogin = function (app,con){
	var request = require("request");
	var userDetails;
	app.get("/auth/callback/:id",(req,res)=>{
		var clientSecret = "2a9b85b9429377d75ace6003a4830b6ed629ca085fd81af2f980e9fa6203674e132fc5f8d30592a3abfe1c3f823cfaf8abe34d5d4a7023eca11d300900ec5821"
		console.log(req.params.id);
		request.post('https://serene-wildwood-35121.herokuapp.com/oauth/getDetails/',
			{json:{ token: req.params.id, secret: clientSecret }},
			function (error, response, body) {
        		if (!error && response.statusCode == 200) {
            		console.log(body);
            		userDetails = body;
					console.log(userDetails.student[0].Student_ID);
            		req.session.username=userDetails.student[0].Student_ID;
            		res.send(userDetails);
        	}
    	});
		
	});
}

module.exports = {apilogin:apilogin};