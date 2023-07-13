// install express by npm i express
// request the package
// const express = require('express');
// invoke the function 
// const app = express();



// commands to learn
// app.get, app.post, app.put, app.delete - CURD operations
// app.all - Actions for any http request with that link 
// app.use - Middleware
// app.listen - Listening to server

// Res.send will be used to send messages. No need for res.end. 

// app.get('/',(req,res)=>{
//     res.send('<h1>Home Page</h1>')
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page</h1>')
// })
// app.all('*',(req,res)=>{
//     res.status(404).send('<h1>Resource not available</h1>')
// })
// app.listen(4000,()=>console.log('Server is listening to port 4000...'))



// To understand the importance of express, lets try to invoke the simple-page/amazon.html thru nodejs using http and later user express to achieve the same

// Http Version

// const http = require('http');
// const {readFileSync} = require('fs');

// //get all files
// const homePage = readFileSync('./simple-page/amazon.html','utf-8')
// read rest of the files
// const cssPage = readFileSync('./simple-page/amazon.css','utf-8')
// const jsPage = readFileSync('./simple-page/amazon.js','utf-8')
// const productsList = readFileSync('./simple-page/products.js','utf-8')
// const cottonSocks = readFileSync('./simple-page/images/athletic-cotton-socks-6-pairs.jpg')
// const rating45 = readFileSync('./simple-page/images/rating-45.png')

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     console.log(url)
//     if (url==='/'){
//         res.writeHead(200,{'context-type':'text/html'});
//         res.write(homePage);
//     } 
//     // Read rest of the file and provide the path.
//     else if(url==='/amazon.css'){
//         res.writeHead(200,{'context-type':'text/html'});
//         res.write(cssPage);
//     }
//     else if(url==='/amazon.js'){
//         res.writeHead(200,{'context-type':'text/html'});
//         res.write(jsPage);
//     }    
//     else if(url==='/products.js'){
//         res.writeHead(200,{'context-type':'text/html'});
//         res.write(productsList);
//     } 
//     else if(url==='/images/athletic-cotton-socks-6-pairs.jpg'){
//         res.write(cottonSocks);
//     }
//     else if(url==='/images/rating-45.png'){
//         res.write(rating45);
//     }    
//     res.end();
// })



// server.listen(4000,()=>console.log('Server is listening to port 4000...'))

// Express Version 


// const express = require('express');
// const app = express();
// const path = require('path')

//Use sendFile functionality and give the absolute file path directly. No need to read and then send. But still have the same error for css,js links 
//setup static and middleware. usually these files are put in a folder called public or static. 
// app.use(express.static('./simple-page'))

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname,'./simple-page/amazon.html'))
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('Resource not found')
// })


// app.listen(4000,()=>console.log('Server is listening to port 4000...'));

// if we rename the file amazon.html to index.html then we dont even need the get instruction. Express static will point to folder simple-page  and if the html file is index.html it will be invoked automatically. 

// API - Uses JSON to communicate back from the server and receiving appln can use the data and format accordingly
// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.status(200).json([{'name': 'jinu'},{'name': 'sunu'}])
// })

// app.listen(4000,()=>console.log('Server is listening to port 4000...'))

// const { application } = require('express');
// const express=require('express');
// const app = express();
// const port = 4000;
// taking data from data.js which is equivalent to simple-page/products. Showcase the important of exports
// const {products}=require('./data')


// app.get('/',(req,res)=>{
//     res.status(200).send(`<h1>Welcome to Home page</h1>
//         <p><a href="/api/products all">All Products List</a>&emsp; API /api/products</p>
//         <p><a href="/api/products/small">All Products - Selected Fields</a>&emsp; API /api/products/small</p>
//         <p><a href="/api/products/1">One Product</a>&emsp; /api/products/1</p>
//         <p><a href="/api/products/:productId"> Product</a>&emsp; /api/products/{productID}</p>
//         `)
// })

// show all products along with all fields 
// app.get('/api/products',(req,res)=>{
//     res.status(200).json(products)
// })

// show all products but only few fields 
// app.get('/api/products/selectedFields',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {id,name,rating:{stars:ratings},priceCents:price} = product
//         return {id, name, ratings, price} 
//     })
//     res.status(200).json(newProducts)
// })

// Only select one specific record. Here Product to be searched is hardcoded 
// app.get('/api/products/1',(req,res)=>{
//     const newProducts = products.find((product)=>{return product.id === 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'})
//     res.status(200).json(newProducts)
// })

// Using Route Params. Those params will be available in req.params. 
// if link is '/api/products/1' req.params value will be {productId : '1'}
// Please note similar to req.params, there is req.query and req.body

// app.get('/api/products/:productId',(req,res)=>{
//     const newProducts = products.find((product)=>{return product.id === req.params.productId})
//     res.status(200).json(newProducts)
// })


// more complex route params
// for this route - /api/products/15b6fc6f-327a-4ec4-896f-486349e85a3d/review/1 , Req.params - { productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d', reviewId: '1' }
// app.get('/api/products/:productId/review/:reviewId',(req,res)=>{
//     console.log(req.params)
//     res.status(200).json(req.params)
// })

// Common API naming convention for using route parameters as follows. if you are searching for product ID, then api route will be as follows

// For searching using productid
// app.get('/api/v1/products/productid/:id',(req,res)=>{
//     const newProducts = products.find((product)=>{return product.id === req.params.id})
//     res.status(200).json(newProducts)
// })

// For searching using rating stars 
// app.get('/api/v1/products/ratingstars/:rating',(req,res)=>{
//     const newProducts = products.find((product)=>{return product.rating.stars == req.params.rating})
//     res.status(200).json(newProducts)
// })

//Using search options. Anything comes after '?' will be passed into req.query as an object with property and value. 
// format should be ?prop1=value1&prop2=value2 - res.query = {prop1: 'value1',prop2:'value2'}
// /api/v1/searchitems?name=jinu&id=10 - res.query = { name: 'jinu', id: '10' }. note both will be strings.


// app.get('/api/v1/searchitems',(req,res)=>{
//     console.log(req.query)
//     res.send('Hello World')
// })

// Using query to search for products starting with request string and return only results mentioned in limit
// Input parameters will be search & limit 
// using different file to have all conditions to match the find items 
// const {products}=require('./data1')

// app.get('/api/v1/finditems',(req,res)=>{
//     const {nameStartsWith, limit} = req.query
//     let sortedProducts = [...products]
//     if (nameStartsWith) {
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(nameStartsWith)
//         })
//     }
//     // As limit received will be string, convert to Number before using. 
//     if(limit){
//         sortedProducts=sortedProducts.slice(0,Number(limit))
//     }
//     //checking for the length of sorted products and if less than 1, return a message with no data. 
//     // Return is important otherwise after this line, next line will be executed and will get an error with two res.send
//     if(sortedProducts.length<1){
//         return res.status(200).json({success:true,data:[]})
//     }
//     res.status(200).send(sortedProducts)
// })
// // ideally the above should be added api/products itself. so if they need to query then can get the values. 
// app.get('*',(req,res)=>{
//     console.log(req.url)
//     res.status(404).send(`Resource not available - Check the link ${req.url}`)
// })

// app.listen(port,()=>console.log(`Server is listening to port ${port}...`))

// Middleware setup - Middleware sits between request and response ::: req ==> middleware ===> res
// const express = require('express');
// const app = express();
// const port=4000;
// To add a logger we need to include them in both the get statements. to avoid this we can use middleware
// Create a new function logger. Add logger in the middleware in the route. req and res will be passed to the middleware automatically. Add next also in the params
// next is to send to the next middleware. Always terminate(using res.send, not advisable) or have next 
// Add logger in every route where middleware is required. But to add every route will be challenging and can use app.use 
// const logger = (req,res,next)=>{
//     const method=req.method
//     const url = req.url
//     const time = new Date().getFullYear()
//     console.log (method, url, time)
//     next()
// }
// app.get('/',logger,(req,res)=>{
//     res.send('Home')
// })

// app.get('/about',logger,(req,res)=>{
//     res.send('About')
// })

// app.listen(port,(req,res)=>console.log(`Server is listening to port ${port}...`))

// Trying app.use 

// const express = require('express');
// const app = express();
// const port = 4000;
// const logger = require('./logger')
// const authorize = require('./6.Materials/authorize')
// const morgan = require('morgan');
// const { Router } = require('express');
// Logger middleware will be used in all routes below. its better app.use is above all routes, otherwise app.use will be applicable to only routes below 
// app.use(logger)
// Logger middleware will be used only for routes starting with /api. 
// app.use('/api',logger)

// console.log(typeof logger, typeof authorize)
// can add more middlewares as an array. Order matters..First middleware will be executed first 
// app.use([logger,authorize])
// app.use([authorize,logger]) // Authorize will be executed first followed by logger

// middleware can be created by own/express provided/third party 
// own - authorize, logger
// express provided - express.static 
// third party - morgan. Install morgan
// app.use(morgan('tiny'))

// app.get('/',(req,res)=>{
//     res.send('Home')
// })

// app.get('/about',(req,res)=>{
//     res.send('About')
// })

// app.get('/api/products',(req,res)=>{
//     res.send('products')
// })

// app.get('/api/items',(req,res)=>{
//     res.send('items')
// })

// // to add multiple middleware in the route
// app.get('/api/jobs',[logger,authorize],(req,res)=>{
//     res.send('jobs')
// })

// app.listen(port,()=>console.log(`Server is listening to ${port}...`))



// Router options 
// Option 1 - define each of the routes as below
// router.get('/',getProducts)
// router.post('/',createProducts)
// router.put('/:id',updateProducts)
// router.delete('/:id',deleteProducts)
// Option 2 - another way to group all common routes together. 
// router.route('/').get(getProducts).post(createProducts)
// router.route('/:id').put(updateProducts).delete(deleteProducts)

// middleware - express.json - Will parse json inputs and property can be used without destructing
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hellow World')
})


app.listen(4000,()=>console.log('Server is runing...'))

