// //Below is a program to print all names. 
// //Each of the JS file will be a module. 


// const secret = 'Super Secret'
// const name1 = 'jinu'
// const name2 = 'Nirajan'

// const sayHello = (name)=>console.log(`Hello there ${name}`)

// sayHello('Neeraj')
// sayHello(name1)
// sayHello(name2)

//Display the module details 
// console.log(module)

// To change the files into modules 
// Use require to include the modules. All self created module should start with a ., if same level use one dot, if this is two levels down, use .. 
const names = require('./globals.js')
// call the module for functions 
const sayHello = require('./function.js')

console.log(names)

sayHello('Neeraj')
sayHello(names.name1)
sayHello(names.name2)