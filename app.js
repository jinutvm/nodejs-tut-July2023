const express = require('express');
const app = express();
const port = 4000;

//routes

app.use(express.json())

app.get('/hello',(req,res)=>{
    const input = [10,30,20,40]
    const input1 = [{name: 'Jinu'},{name: 'Sunu'}]
    const output = input.sort()
    const output1 = input.sort(name)
    res.send({query: req.query,body: req.body, input, output, input1, output1})
})

app.get('/tasks/:id',(req,res)=>{
    res.send(req.params)
})







app.listen(port,()=>console.log(`Server is listening to port ${port}...`))