const mongoose=require('mongoose')

//
// const connectionString = 'mongodb+srv://jinu:1234@cluster0.mzttwmi.mongodb.net/07-TASK-MANAGER?retryWrites=true&w=majority'

//once the instance is available, method name is connect
// this will return a promise, then and catch 
// mongoose
//     .connect(connectionString)
//     .then(()=>console.log('Successfully connected to the DB....'))
//     .catch((err)=>console.log(err))

//if the module has a console.log it will be printed in the console by just adding this module in app.js
// That happens if there is function which is invoked in the module and hence no need of export statement
// just import in app.js

// With import statement, Server is On and then connected to DB. Ideal situation should be DB to be connected followed by server 
//declaring the mongoose.connet as a function which can be invoked from the app.js
// connectDB will be invoked from the frontend 

// const connectDB = () =>{
//     return mongoose.connect(connectionString)
// }
// Ideally connection string should be passed and not hardcoded. 
const connectDB = (url)=>{
    return mongoose.connect(url)
}

module.exports = connectDB