const mongoose = require('mongoose')

const task_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide task name'],
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('task', task_schema)