const express = require('express')

//imported routers here
const router = express.Router()

//import controllers here
const {get_all_tasks, create_task, get_one_task, delete_task} = require('../controllers/tasks')


router.route('/').get(get_all_tasks).post(create_task)
router.route('/:id').get(get_one_task).delete(delete_task)

module.exports = router