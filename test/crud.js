const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("It can CRUD dogs", function(){
    describe("#List", function(){
        it("Displays a list of dogs", function(done){
            request(app)
            .get("/dogs")
            .expect(200)
            .end(function(error, response){
                if (error) return done(error);
                assert.deepEqual(response.body, {
                    dogs: [{
                        id: 1,
                        name: "Charles Barkley",
                        description: "Fit, tan, single and ready to mingle. Up for a romantic walk this afternoon? I'm an adventurer who is looking for the right mate for endless playdates. I have exquisite taste, so if you're a foodie, call me.  We can chat about bones over the phone.",
                        imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog1.jpg",
                        imageCaption: "Me throwin' the bee around"
                    },{
                        id: 2,
                        name: "Bilbo Waggins",
                        description: "What's Valentine's Day without chocolate? I'm single, brown and a goofball looking for love. Let's plan a date made for two, or we can hang out with friends.",
                        imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog2.jpg",
                        imageCaption: "I'm into sports"
                    },{
                        id: 3,
                        name: "Helga Hufflepup",
                        description: "Warning: I'm a heartbreaker. But what princess isn't?  Falling in love with me is easy to do, so don't be surprised if you find yourself in a jewelry store shopping for princess-cut diamonds to throw at my feet. I'm looking for a prince to call my own.",
                        imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog3.jpg",
                        imageCaption: "My senior picture, lol"
                    }]
                });
                done();
            });
        });
    });
    describe("#Get", function(){
        it("Displays a single dog", function(done){
            request(app)
            .get("/dogs/1")
            .expect(200)
            .end(function(error, response){
                if (error) return done(error);
                assert.deepEqual(response.body, {
                    dog: {
                        id: 1,
                        name: "Charles Barkley",
                        description: "Fit, tan, single and ready to mingle. Up for a romantic walk this afternoon? I'm an adventurer who is looking for the right mate for endless playdates. I have exquisite taste, so if you're a foodie, call me.  We can chat about bones over the phone.",
                        imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog1.jpg",
                        imageCaption: "Me throwin' the bee around"
                    }
                });
                done();
            });
        });
    });
});
