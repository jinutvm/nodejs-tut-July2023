// Request the express object and invoke the router module 
const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
} = require('../controllers/ctask')

// for the base route '/' and get verb, display all items. Ideally function inside get should be moved to controllers 
// router.route('/').get((req,res)=>{
//     res.send('all items')
// })
// Another way of router. for each of the verb need to give sepereate lines. Instead same route different verbs can be grouped together in the above way. 
// router.get('/',(req,res)=>{
//     res.send('all items from router.get method')
// })

// writing the function inside get as a seperate function . This function will be moved to controllers 
// const getAllTasks = (req,res)=>{
//     res.send('all items')
// }
// Call the function inside get. 

router.route('/').get(getAllTasks).post(createNewTask)
//Now create the routes and controller function for all other routes 
// First create controller functions and export the same
// Import in the routes and update the router.route to cover everything.
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)
// Test each of the routes through postman and ensure the default message is available. This shows the connection is thru 


module.exports = router; 

