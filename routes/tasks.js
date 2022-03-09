const express = require('express')

//imported routers here
const router = express.Router()

//import controllers here
const {get_all_tasks} = require('../controllers/tasks')

router.route('/').get(get_all_tasks)

module.exports = router