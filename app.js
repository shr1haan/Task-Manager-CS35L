const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const port = 3000
require('dotenv').config()
const connect_to_db = require('./db/connect')


//middleware info
app.use(express.json())

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        // first connect to the databse
        await connect_to_db(process.env.MONGO_KEY)
        // if successful then listen on port
        app.listen(port, console.log(`server is listening on port ${port}...`))

    } catch (error) {
        console.log(error)
        
    }
}

start()
