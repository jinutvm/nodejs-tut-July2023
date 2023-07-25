//require('./db/connect')
const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./db/connect');
//add routes modules and get the routes as tasks
const tasks = require('./routes/tasks');
require('dotenv').config()
const notFound = require('./middleware/not-found')
// Include error handler middleware
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware 
//express.json - will parse the json inputs and get details from req.body
app.use(express.json())



app.get('/hello',(req,res)=>{
    res.send('Task manager app1')
})

// app.get('/hello',(req,res)=>{
//     res.send('Task manager app')
// })

//when this base url is hit, go to the tasks route for next steps. 

app.use('/api/v1/tasks',tasks)

//Instead of app.all using app.use for route not found 

// app.all('*',(req,res)=>{
//     res.status(404).send('Route not found')
// })
// Once the control comes to this app.use means no route found on top to perform and if this is executed means it will be not found. 
//Should be at the bottom. 
app.use(notFound)

// INclude the middleware 
app.use(errorHandlerMiddleware)
// app.get('/api/v1/tasks')-  Get all tasks
// app.post('/api/v1/tasks') - Create new tasks 
// app.get('/ap1/v1/tasks/:id') - get single tasks
// app.patch('/api/v1/tasks/:id') - update tasks
// app.delete('/api/v1/tasks/:id') - Delete tasks

// Create a new function to call connect DB and if successful spin up the server 
// add connection string and pass once .env files are added


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        console.log('Connected to DB...')
        app.listen(port,()=>console.log(`Server is listening to port ${port}...`));
    } catch (err) {
        console.log(err)
    }
}
//invoke the function
start()
// app.listen(port,()=>console.log(`Server is listening to port ${port}...`));