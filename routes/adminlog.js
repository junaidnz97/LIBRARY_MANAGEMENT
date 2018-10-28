var adminlog=function (app,con) {

    app.post("/admin/login",function (req,res) {

        if (req.session.adminusername == 'admin' && req.cookies.user_sid) {
            res.send("already logged in");
        }

        else
        {
            var q = "select * from  Admin where UserName ='" + req.body.username + "' and Password = '"+req.body.password+"'"
            con.query(q,function (err,resp) {

                if(err)
                    throw err;
                if(!JSON.parse(JSON.stringify(resp)).length)
                    res.send("login unsuccessful");
                else{
                    req.session.adminusername=req.body.username;
                    req.session.username=null;
                    res.send("login successful");
                }
            });
        }
    });

    app.post("/admin/logout",function (req,res) {

        res.clearCookie('user_sid');
        res.send("logut successful");
    });

    app.post("/admin/changepassword",function(req,res){

        var curPassword=req.body.currentpassword;
        var newPassword=req.body.newpassword;
        var confirmnewPassword=req.body.confirmpassword;
        var q="select password from Admin where UserName='admin'";

        con.query(q,function (err,response) {

            var temp=JSON.parse(response);
            console.log(temp);
        });
    });

};

module.exports={
    adminlog:adminlog
};