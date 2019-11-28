exports.seed = function(knex, Promise) {
    return knex.schema.raw("TRUNCATE TABLE \"dog\" RESTART IDENTITY CASCADE")
    .then(function(){
        return knex("dog").insert([{
            name: "Charles Barkley",
            description: "Fit, tan, single and ready to mingle. Up for a romantic walk this afternoon? I'm an adventurer who is looking for the right mate for endless playdates. I have exquisite taste, so if you're a foodie, call me.  We can chat about bones over the phone.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog1.jpg",
            imageCaption: "Me throwin' the bee around"
        },{
            name: "Bilbo Waggins",
            description: "What's Valentine's Day without chocolate? I'm single, brown and a goofball looking for love. Let's plan a date made for two, or we can hang out with friends.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog2.jpg",
            imageCaption: "I'm into sports"
        },{
            name: "Helga Hufflepup",
            description: "Warning: I'm a heartbreaker. But what princess isn't?  Falling in love with me is easy to do, so don't be surprised if you find yourself in a jewelry store shopping for princess-cut diamonds to throw at my feet. I'm looking for a prince to call my own.",
            imageUrl: "https://s3-us-west-2.amazonaws.com/assessment-images/barkwire/dog3.jpg",
            imageCaption: "My senior picture, lol"
        }]);
    });
};
