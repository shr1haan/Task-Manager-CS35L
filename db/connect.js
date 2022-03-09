// setup the database
const mongoose = require('mongoose')

//connection string from mongoDB
const connection_string = 'mongodb+srv://Shrihaan:12345@task-manager.qumhg.mongodb.net/Task-Manager-DB?retryWrites=true&w=majority'

mongoose
    //connect to the database
    .connect(connection_string, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true})
    //callback so we know if we connected
    .then(()=>console.log('connected to db...'))
    //if errors, then print to console
    .catch((err)=>console.log(err))
