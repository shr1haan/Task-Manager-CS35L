require('./db/connect')
const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const port = 3000

//middleware info
app.use(express.json())

// all the routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)


app.listen(port, console.log(`server is listening on port ${port}...`))