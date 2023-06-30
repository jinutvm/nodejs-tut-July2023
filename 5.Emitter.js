//JS depends a lot on events and is Event driven programming 
// const EventEmitter = require('events');
//Create a new object for EventEmitter
// const customEmitter = new EventEmitter();

// ON will listen to response and once received will execute call back function 
// customEmitter.on('response',()=>{
//     console.log('Response received')
// })
// customEmitter.on('response1',()=>{
//     console.log('Response1 received')
// })
// can do multipe things for the same message
// customEmitter.on('response1',()=>{
//     console.log('Another logic for Response1 received')
// })
// customEmitter.on('response3',(name,id)=>{
//     console.log(`Received ${name} with id: ${id} `)
// })
// customEmitter.on('response3',()=>{
//     console.log(`Received response3`)
// })


// Emit will emit the message. Here it is emitting response which will be picked up by above ON
// Emit will have to placed after all ON 

// customEmitter.emit('response')
// customEmitter.emit('response1')
// customEmitter.emit('response2')// no listener and nothing will happen
// customEmitter.emit('response3','jinu','14') // with variables 

// Create a server. Server will listen to request and have call back function defined. A refresh in the browser will 
// const http = require('http');

// const server = http.createServer();

// server.on('request',(req,res)=>{
//     res.end("Welcome")
// })

// server.listen(4000);