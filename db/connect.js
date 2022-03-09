// setup the database
const mongoose = require('mongoose')

const connect_to_db = (url) => {
    return mongoose
    //connect to the database
    .connect(url, {
        // added these to remove deprecation warnings in console
        // basically lifted this from a tutorial
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true})
}

module.exports = connect_to_db
