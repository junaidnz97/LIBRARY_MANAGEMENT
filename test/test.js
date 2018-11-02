var chai=require("chai");
var app=require("../server.js");
var chaiHttp = require('chai-http');
var assert=require("assert");
chai.use(chaiHttp);
app=app.app;
var cookievalue;
var sleep = require('sleep');



describe("test",function () {

    it("apilogin",function (done) {

       /* chai.request(app)
            .get("/auth/callback/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImlhdCI6MTU0MTA3NjgzNCwiZXhwIjoxNTQzNjY4ODM0fQ.oM9BYs7VR_D7uJmhpe39UDxzsfL-ogFkcd2L5ObDPbU")
            .then(function (res) {
               //console.log("Response=");
                if ( res instanceof Error ) {

                    console.log("Response = "+res);
                }

            });*/

        chai.request(app)
            .post('/login')
            .type('form')
            .send({"username":"20160010036","password":"12345"})
            .then(function(res){
                //this.timeout(30000);
                //setTimeout(done, 30000);
                assert.equal(res.status,200);
                //console.log(res.headers['set-cookie'][0]);
                //console.log(res.headers['set-cookie'][0].substring(9,res.headers['set-cookie'][0].length).split(';')[0].trim());
                //cookievalue=res.headers['set-cookie'][0].substring(9,res.headers['set-cookie'][0].length).split(';')[0].trim();
                cookievalue = res.headers['set-cookie'].pop().split(';')[0];
                //console.log("cvalue  - "+cookievalue)
                done();
            });
    });

    it("displaycatalogueloggedin",function (done) {
        //console.log("cookievalue = "+cookievalue);//JSON.stringify({user_sid: cookievalue}));
        chai.request(app)
            .get("/catalogue")
            .set('Cookie', cookievalue)
            .then(function (res) {
                //console.log(res.status);
                assert.equal(res.status,200);
                done();
            });
    });

    it("displaycataloguenotloggedin",function (done) {
        //console.log("cookievalue = "+cookievalue);//JSON.stringify({user_sid: cookievalue}));
        chai.request(app)
            .get("/catalogue")
            .then(function (res) {
                //console.log(res.status);
                assert.equal(res.status,200);
                done();
            });
    });

    it("booksummaryloggedin",function(done){
        chai.request(app)
            .get("/booksummary?bookId=21")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("booksummarynotloggedin",function(done){
        chai.request(app)
            .get("/booksummary?bookId=21")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("reviewloggedin",function(done){
        chai.request(app)
            .get("/review?bookId=21")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("reviewnotloggedin",function(done){
        chai.request(app)
            .get("/review?bookId=21")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("borrowloggedin",function(done){
        chai.request(app)
            .post("/borrow")
            .set('Cookie', cookievalue)
            .send({"bookId":21})
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });
    it("borrownotloggedin",function(done){
        chai.request(app)
            .post("/borrow")
            .send({"bookId":21})
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("displayuserprofileloggedin",function(done){
        chai.request(app)
            .get("/displayuserprofile")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });
    it("displayuserprofilenotloggedin",function(done){
        chai.request(app)
            .get("/displayuserprofile")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });
    
    it("fineamountloggedin",function(done){
        chai.request(app)
            .post("/fine-amount")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("fineamountnotloggedin",function(done){
        chai.request(app)
            .post("/fine-amount")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("booksinpossessionloggedin",function(done){
        chai.request(app)
            .get("/books-in-possession")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("booksinpossessionnotloggedin",function(done){
        chai.request(app)
            .get("/books-in-possession")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("bookshistoryloggedin",function(done){
        chai.request(app)
            .get("/books-history")
            .set('Cookie', cookievalue)
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("bookshistorynotloggedin",function(done){
        chai.request(app)
            .get("/books-history")
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });


    it("userlogout",(done)=>{
        chai.request(app)
            .post("/logout")
            .then((res)=>{
                assert.equal(res.status,200);
                cookievalue = "";
                console.log(cookievalue);
                done();
            })
    });

    it("adminlogin",(done)=>{
        chai.request(app)
            .post("/admin/login")
            .send({"username":"admin","password":"iiits123"})
            .then((res)=>{
                assert.equal(res.status,200);
                cookievalue = res.headers['set-cookie'].pop().split(';')[0];
                console.log(cookievalue);
                done();
            })
    });

    it("userlistloggedin",(done)=>{
        chai.request(app)
            .get("/view-user-list")
            .set('Cookie', cookievalue)
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });


    it("userlistnotloggedin",(done)=>{
        chai.request(app)
            .get("/view-user-list")
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("viewrequestlistloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .set('Cookie', cookievalue)
            .send({"disp":1})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });
    it("viewrequestlistnotloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .send({"disp":1})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("approveborrowloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .set('Cookie', cookievalue)
            .send({"type":1,"hbookId":7231,"userId":46})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("approveborrownotloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .send({"type":1,"hbookId":7231,"userId":46})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });
    
    it("rejectborrowloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .set('Cookie', cookievalue)
            .send({"hbookId":7231,"userId":51})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("rejectborrownotloggedin",(done)=>{
        chai.request(app)
            .post("/view-request-admin")
            .send({"hbookId":7231,"userId":51})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("returnloggedin",(done)=>{
        chai.request(app)
            .post("/return")
            .set('Cookie', cookievalue)
            .send({"hbookId":7231,"userId":46,"bookId":21})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });

    it("returnnotloggedin",(done)=>{
        chai.request(app)
            .post("/return")
            .send({"hbookId":7231,"userId":46,"bookId":21})
            .then((res)=>{
                assert.equal(res.status,200);
                done();
            })
    });


    it("adminlogout",(done)=>{
        chai.request(app)
            .post("/admin/logout")
            .then((res)=>{
                assert.equal(res.status,200);
                cookievalue = "";
                console.log(cookievalue);
                done();
            })
    });




});


