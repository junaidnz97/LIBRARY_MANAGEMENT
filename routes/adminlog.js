var adminlog=function (app,urlencodedParser,con) {

    app.post("/admin/login",urlencodedParser,function (req,res) {

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
                    res.send("login successful");
                }
            });
        }
    });

    app.post("/admin/logout",function (req,res) {

        res.clearCookie('user_sid');
        res.send("logut successful");
    });

};

module.exports={
    adminlog:adminlog
};