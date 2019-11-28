var database = require("./connection");

module.exports = {
    listDogs(){
        return database("dog").select();
    },
    getDog(id){
        return database("dog").select().where("id", id).first();
    }
};
