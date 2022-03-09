
// controller for fetching all tasks
const get_all_tasks = (req, res) => {
    res.send('get all tasks')
}

// controller for creating new tasks
const create_task = (req, res) => {
    res.send('create new task')
}

// controller for getting info on one task
const get_one_task = (req, res) => {
    res.send('info on one task')
}

// controller for deleting the task
const delete_task = (req, res) => {
    res.send('delete task')
}

module.exports =
{
    get_all_tasks, create_task, get_one_task, delete_task
}
