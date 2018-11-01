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
                assert.equal(res.status,400);
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
                assert.equal(res.status,400);
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
                assert.equal(res.status,400);
                done();
            });
    });

    /*it("borrowloggedin",function(done){
        chai.request(app)
            .post("/borrow")
            .set('Cookie', cookievalue)
            .send({"bookId":21})
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });
    */
    it("borrownotloggedin",function(done){
        chai.request(app)
            .post("/borrow")
            .send({"bookId":989})
            .then(function(res){
                assert.equal(res.status,400);
                done();
            });
    });

    /*it("returnloggedin",function(done){
        chai.request(app)
            .post("/return")
            .set('Cookie', cookievalue)
            .send({"bookId":21,"hbookId":7231})
            .then(function(res){
                assert.equal(res.status,200);
                done();
            });
    });

    it("returnnotloggedin",function(done){
        chai.request(app)
            .post("/return")
            .send({"bookId":21,"hbookId":7231})
            .then(function(res){
                assert.equal(res.status,400);
                done();
            });
    });*/

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
                assert.equal(res.status,400);
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
                assert.equal(res.status,400);
                done();
            });
    });





});


