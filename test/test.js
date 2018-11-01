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


});


