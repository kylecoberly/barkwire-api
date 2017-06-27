exports.up = function(knex, Promise){
    return knex.schema.createTable("dog", function(dog){
        dog.increments("id");
        dog.string("name");
        dog.text("description");
        dog.string("imageUrl");
        dog.string("imageCaption");
    });
};

exports.down = function(knex, Promise){
    return knex.schema.dropTableIfExists("dog");
};
