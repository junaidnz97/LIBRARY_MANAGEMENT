var chai=require("chai");
var app=require("../server.js");
var chaiHttp = require('chai-http');
var assert=require("assert");
chai.use(chaiHttp);
app=app.app;

describe("login",function () {

    it("apilogin",function () {

        chai.request(app)
            .get("/auth/callback/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsImlhdCI6MTU0MTA3NjgzNCwiZXhwIjoxNTQzNjY4ODM0fQ.oM9BYs7VR_D7uJmhpe39UDxzsfL-ogFkcd2L5ObDPbU")
            .then(function (res) {
               //console.log("Response=");
                if ( res instanceof Error ) {

                    console.log("Response = "+res);
                }

            });
    });
});

