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
// const Task = require('../models/mtasks'); 
// const getAllTasks = async (req,res)=>{
//     try {      
//         const task=await Task.find()
//         if(task.length<1){
//             return res.status(404).json({msg: 'No records exist in DB'})
//         }
//         res.status(200).json({task})

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Something unexpected occured'})
//     }
// }

// const createNewTask = async (req,res)=>{
//     try {
//         const task= await Task.create(req.body) 
//         if(task.length<1){
//             return res.status(404).json({msg: 'No records exist in DB'})
//         }
//         res.status(201).json({task})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Something unexpected occured'})
//     }
// }

// const getSingleTask = async (req,res)=>{
//     try {
//         const task = await Task.find({_id:req.params.id}).exec()        
//         if(task.length<1){
//             return res.status(404).json({msg: 'No records exist in DB'})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Something unexpected occured'})
//     }
// }

// const updateSingleTask = async (req,res)=>{
//     try {
//         // const task = await Task.findByIdAndUpdate(req.params.id,{completed: req.body.completed}
//         const task = await Task.findByIdAndUpdate(req.params.id,req.body)
//         if(task.length<1){
//             return res.status(404).json({msg: 'No records exist in DB'})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Something unexpected occured'})
//     }
// }

// const deleteSingleTask = async (req,res)=>{
//     try {
//         const task = await Task.deleteOne({_id:req.params.id})
//         if(task.length<1){
//             return res.status(404).json({msg: 'No records exist in DB'})
//         }
//         res.status(200).json({task})
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({msg: 'Something unexpected occured'})
//     }
// }

// Using Async Wrapper instead of all try catch statements 

const Task = require('../models/mtasks'); 
// include asyncWrapper  in controller 
const {asyncWrapper} = require('../middleware/aync')


// Wrap the whole function with asyncWrapper middleware. Remove the try catch block 
// In case of error next() build in error handler will catch the error if next() is not defined.
// To define custom next() error handler, creating a new component in middleware. 
//      1. Created error-handlder.js in middleware. 
//      2. In app.js, include the middleware and also invoke the middleware 
// Manage the 404 errors using the error handler 

const getAllTasks = asyncWrapper (async (req,res)=>{
    
        const task=await Task.find()
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})
})

const createNewTask = asyncWrapper  (async (req,res)=>{

        const task= await Task.create(req.body) 
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(201).json({task})
})

const getSingleTask = asyncWrapper (async (req,res,next)=>{

        const task = await Task.find({_id:req.params.id}).exec()        
        // if(task.length<1){
        //     return res.status(404).json({msg: 'No records exist in DB'})
        // }
        // Managing using error handler 
        // add next also on the parameters 
        if (task.length<1){
            console.log('No records found')
            const error = new Error('Not Found')
            error.status = 404 
            return next(error)
        }
        res.status(200).json({task})

})

const updateSingleTask = asyncWrapper (async (req,res)=>{

        // const task = await Task.findByIdAndUpdate(req.params.id,{completed: req.body.completed}
        const task = await Task.findByIdAndUpdate(req.params.id,req.body)
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})

})

const deleteSingleTask = asyncWrapper (async (req,res)=>{

        const task = await Task.deleteOne({_id:req.params.id})
        if(task.length<1){
            return res.status(404).json({msg: 'No records exist in DB'})
        }
        res.status(200).json({task})

})

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
}