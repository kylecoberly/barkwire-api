var express = require("express");
var router = express.Router();
var queries = require("../data/queries");

router.get("/", function(request, response) {
    queries.listDogs().then(dogs => {
        response.json({dogs});
    });
});

router.get("/:id", function(request, response) {
    queries.getDog(request.params.id).then(dog => {
        response.json({dog});
    });
});

module.exports = router;
