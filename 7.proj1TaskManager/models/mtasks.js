const mongoose = require('mongoose');


// const TaskSchema = new mongoose.Schema({
//     name:String,completed:Boolean
// })
//Update the model with validators added 
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'must provide name'],
        trim : true,
        maxlength: [20,'name cannot be more than 20 chars']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})


module.exports = mongoose.model('Task',TaskSchema)

// if model name is item - database collection will be named as items
// if model name is items - database collection will be named as items 
// model name is considered to be singular form of collections. 