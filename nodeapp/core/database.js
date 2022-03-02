const mongoose = require('mongoose');


class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb://root:<your_pass_here>@db:27017")
        .then(() => {
            console.log("Successfully connected to the database!");
        })
        .catch((err) => {
            console.log("database connection error" + err);
        })
    }
}

module.exports = new Database();
