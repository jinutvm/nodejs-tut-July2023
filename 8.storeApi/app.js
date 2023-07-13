const express = require('express')
const app = express()
const port = 4002;
const products = require('./routes/product')
const connectDB = require('./db/connect')
require('dotenv').config()

// APIs required
// static product list for testing 
// Product list 

app.use(express.json())

app.use('/api/v1/products',products)

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)      
        console.log('Connect to DB...') 
        app.listen(port,()=>console.log(`Server is listening to ${port}....`))
    } catch (error) {
        console.log(error)
    }
}

start()
