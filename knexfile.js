require("dotenv").load();

module.exports = {
    development: {
        client: "postgresql",
        connection: "postgres:///barkwire"
    },
    production: {
        client: "postgresql",
        connection: process.env.DATABASE_URL
    }
};
