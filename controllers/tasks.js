const task = require('../models/tasks')

// controller for fetching all tasks
const get_all_tasks = (req, res) => {
    res.send('get all tasks')
}

// controller for creating new tasks
const create_task = async (req, res) => {
    const task_to_create = await task.create(req.body)
    res.status(201).json({task_to_create})
}

// controller for getting info on one task
const get_one_task = (req, res) => {
    res.send('info on one task')
}

// controller for updating task
const update_task = (req, res) => {
    res.send('update task')
}

// controller for deleting the task
const delete_task = (req, res) => {
    res.send('delete task')
}

module.exports =
{
    get_all_tasks, create_task, get_one_task, update_task, delete_task
}
