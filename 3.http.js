const http = require('http')

// // Create server using createServer in http object. Req and res will be two variable. Res.write will send the message to website, res.end will end the connection. Data can be given in res.end as well  
// const server = http.createServer((req,res)=>{
//     // res.write('Hello World')
//     // res.end()
//     //can send in res.end as well
//     res.end('Hello World')
// });


const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html')
    if(req.url === '/'){
        // res.setHeader('Content-type','text/html')
        res.write('<h1>Welcome to home page</h1><a href="/about">About</a>')
        res.end()
    }
    if (req.url === '/about'){
        res.write('<h1>Welcome to about page</h1><a href="/">Home</a>')
        res.end()
    }
})

// Need to provide the port for the server to listen
server.listen(4000);

