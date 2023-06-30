// internal build in modules can be used directly 
// npm will be installed along with node
// check npm version by npm --version or npm --v in terminal

const { appendFile } = require("fs")

// For installing local packages
// For this project alone 
// npm i <packageName>
// For global project 
// npm i -g <packageName>

// create package.json
// npm init (step by step, answer every question,  press enter to skip) 
// npm init -y (everything default) 
// Will create package.json- 
// try npm i nodemon
// Everyting installed further will be listed in the package.json and a folder node_modules will be created
// While uploading to github we will ignore node_modules. But anyone having package.json with npm init, node_modules will be created 

// to install as dev dependency . To use only in development
// npm i nodemon --save--dev
// To remove npm package -- npm uninstall <packagename>
//  in package.json we can setup scripts. in scripts object remove existing testing package and add start command 
//   "scripts": {
//     "start": "node app.js"
//   },
// type npm start and app.js will executed
// to use nodemon - means the server will watch for any changes and restart the same
//   "scripts": {
//     "start": "nodemon app.js"
//   },
// Or change nodemon for dev 
//   "scripts": {
//     "start": "node app.js",
//     "dev" : "nodemon app.js"
//   },


const hello = 'hello'
console.log(hello)
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.write('My home page1');
//     res.end();
// })

// server.listen(4000,()=>console.log('Server is running...'))
