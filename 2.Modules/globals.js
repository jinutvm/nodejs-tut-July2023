// Define the globals here but export only which is required. 
const secret = 'Super Secret'
const name1 = 'jinu'
const name2 = 'Nirajan'
//Whatever included in the module.exports only will be exported
module.exports = {name1,name2}
//check the exports property in the module object
console.log(module)

// If there are multiple module.exports only last one will be send out. 
// const items = [1,2]
// module.exports = items


// To export multiple items perform the following as these are all objects 
// module.exports.name = {name1,name2}
// module.exports.items = items

// console.log(module)

