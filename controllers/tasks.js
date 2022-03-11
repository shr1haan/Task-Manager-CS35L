const task = require('../models/tasks')

// controller for fetching all tasks
const get_all_tasks = async (req, res) => {
    try{
        //since we want all, we use an empty object
        const show_tasks = await task.find({})
        res.status(200).json({tasks: show_tasks})
    } catch(error){
        res.status(500).json({msg:error})
    }
}

// controller for creating new tasks
const create_task = async (req, res) => {
    try {
        const task_to_create = await task.create(req.body)
        res.status(201).json({tasks: task_to_create})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// controller for getting info on one task
const get_one_task = async (req, res) => {
    try {
        const {id:task_id} = req.params
        const task_to_find = await task.findOne({_id:task_id})

        if (task_to_find == null){
            return res.status(404).json({msg: `no task with id : ${task_id} found`})
        }
        res.status(200).json({tasks: task_to_find})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// controller for searching for one task
const find_task = async (req, res) => {
    try {
        const {name:task_name} = req.params
        const task_to_find = await task.findOne({name: task_name})

        if (task_to_find == null){
            return res.send(404, 'Task Not Found')
        }
        res.status(200).json({tasks: task_to_find})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// controller for updating task
const update_task = async (req, res) => {
    try {
        const {id:task_id} = req.params
        const task_to_edit = await task.findOneAndUpdate({_id: task_id}, req.body, 
        {new: true, runValidators: true,})

        if (task_to_edit == null){
            return res.status(404).json({msg: `no task with id : ${task_id} found`})
        }

        res.status(200).json({task: task_to_edit})

    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// controller for deleting the task
const delete_task = async (req, res) => {
    try {
        const {id: task_id} = req.params
        const task_to_delete = await task.findOneAndDelete({_id:task_id})
    
        if (!task){
            return res.status(404).json({msg: `no task with id : ${task_id} found`})
        }

        res.status(200).json({task: task_to_delete})
    }
    catch (error){
        res.status(500).json({msg:error})
    }
}

module.exports = 
{
    get_all_tasks, create_task, get_one_task, update_task, delete_task, find_task
}
