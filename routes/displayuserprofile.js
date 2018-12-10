var displayuserprofile = function (app, con) {

    /*
    function for returning user details
     */
    app.get("/displayuserprofile", function (req, res) {


        if (req.session.username && req.cookies.user_sid) {

            var request = require('request');
            var body = "select * from student where Student_ID='" + req.session.username + "'";
            console.log(body);

            request.post('https://serene-wildwood-35121.herokuapp.com/query', {form: {query: body}}, function (err, response, value) {

                if (err)
                    res.send("invalid");


                var temp = JSON.parse(value);
                var details = {
                    UserId: temp[0].Student_ID,
                    UserName: temp[0].Student_First_Name + temp[0].Student_Middle_Name + temp[0].Student_Last_name,
                    Email: temp[0].Student_Email,
                    CurrentYear: temp[0].Student_Cur_YearofStudy,
                    AcademicStatus: temp[0].Student_Academic_Status,
                    Dues: ""

                };

                var q = "select Dues from Student where UserName='" + req.session.username + "'";
                console.log(q);
                con.query(q, function (error, responseq) {
                    if (err)
                        throw err;

                    var finalresp = JSON.parse(JSON.stringify(responseq));

                    console.log(finalresp);
                    details.Dues = finalresp[0].Dues;
                    res.status(200).send(details);
                });


            });

        }
        else
        {
            res.status(200).send({"output":"notloggedin"});
        }
    });


    // app.get("/displayuserprofile_admin", function (req, res) {
    //     if(req.session.adminusername && req.cookies.user_sid)
	// 	{
    //         uname = req.body.username;

    //         var request = require('request');
    //         var body = "select * from student where Student_ID='" + uname + "'";
    //         console.log(body);

    //         request.post('https://serene-wildwood-35121.herokuapp.com/query', {form: {query: body}}, function (err, response, value) {

    //             if (err)
    //                 res.send("invalid");


    //             var temp = JSON.parse(value);
    //             var details = {
    //                 UserId: temp[0].Student_ID,
    //                 UserName: temp[0].Student_First_Name + temp[0].Student_Middle_Name + temp[0].Student_Last_name,
    //                 Email: temp[0].Student_Email,
    //                 CurrentYear: temp[0].Student_Cur_YearofStudy,
    //                 AcademicStatus: temp[0].Student_Academic_Status,
    //                 Dues: ""

    //             };

    //             var q = "select Dues from Student where UserName='" + uname + "'";
    //             console.log(q);
    //             con.query(q, function (error, responseq) {
    //                 if (err)
    //                     throw err;

    //                 var finalresp = JSON.parse(JSON.stringify(responseq));

    //                 console.log(finalresp);
    //                 details.Dues = finalresp[0].Dues;
    //                 res.status(200).send(details);
    //             });

    //         });
            
    //     }

    //     else
    //     {
    //         res.status(200).send({"output":"notloggedin"});
    //     }
    // }

};

module.exports = {displayuserprofile: displayuserprofile};