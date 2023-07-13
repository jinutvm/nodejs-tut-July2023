// const getAllTasks = (req,res)=>{
//     res.send('all items from controller')
// }

// const createNewTask = (req,res)=>{
//     res.send(req.body)
// }

// const getSingleTask = (req,res)=>{
//     res.send('Get Single Task')
// }

// const updateSingleTask = (req,res)=>{
//     res.send('Update Single Task')
// }

// const deleteSingleTask = (req,res)=>{
//     res.send('Delete Single Task')
// }

// module.exports = {
//     getAllTasks,
//     createNewTask,
//     getSingleTask,
//     updateSingleTask,
//     deleteSingleTask
// }

// include models and start creating in the DB. Check in the mongoose document for the commands https://mongoosejs.com/docs/api/model.html
// Just when the task is invoked collections will be created if it doesnt exist
const Task = require('../models/mtasks'); 
const getAllTasks = async (req,res)=>{
    try {      
        const task=await Task.find()
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected occured'})
    }
}

const createNewTask = async (req,res)=>{
    try {
        const task= await Task.create(req.body) 
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(201).json({task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected occured'})
    }
}

const getSingleTask = async (req,res)=>{
    try {
        const task = await Task.find({_id:req.params.id}).exec()        
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected occured'})
    }
}

const updateSingleTask = async (req,res)=>{
    try {
        // const task = await Task.findByIdAndUpdate(req.params.id,{completed: req.body.completed}
        const task = await Task.findByIdAndUpdate(req.params.id,req.body)
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected occured'})
    }
}

const deleteSingleTask = async (req,res)=>{
    try {
        const task = await Task.deleteOne({_id:req.params.id})
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Something unexpected occured'})
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
}