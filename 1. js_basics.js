// const amount = 12;

// if (amount<10){
//     console.log('Amount is smaller')
// } 
// else {
//     console.log('Amount is higher')
// }

// console.log(`Amount is ${amount}`)

// two ways to define - Const and let 
// equality check == & ===

// const string1 = 'Hello'
// const string2 = 'World'

// console.log(string1+string2)

// console.log(20+10)

// console.log('$' + 20 + 10)
// console.log('$'+(20+10))

// Globals
// __dirname 
// __filename
// require, module, process 

// console.log(__dirname)

// Functions 
// function print() {
//     console.log('Executing in function')
// }
// print()

// const print = ()=>{
//     console.log('Executing in arrow function')
// }
// print();

// const sum = (a,b)=>{
//     c = a+b
//     console.log('This is before return')
//     return c 
//     console.log('This is after return')
// }
// const totalSum = sum(1,2);
// console.log(totalSum)

// Objects 

// const newItems = {
//     name : 'tie',
//     price : 1090
// }

// console.log(newItems.name)
// // Change values 
// newItems.name = 'cotton tie'
// console.log(newItems)
// // Add new values 
// newItems.quantity = 10;
// console.log(newItems)
// //Delete new values 
// delete newItems.quantity
// console.log(newItems)
// // Another way of getting properties using [] - Bracket notation instead of dot notation
// console.log(newItems['name'])
// //Usage of Bracket notation. 
// //System will consider this as a subtraction and will give error
// // console.log(newItems.cost-item)
// const newItems = {
//     name : 'tie',
//     price : 1090,
//     'cost-item': 10
// }
// console.log(newItems['cost-item'])

//Objects can have another objects 
// const newItems = {
//     name : 'tie',
//     price : 1090,
//     rating : {
//         score: 4.5,
//         count: 90
//     }
// }
// console.log(newItems.rating.score)
//Objects can have functions as well - called method.
// const newItems = {
//     name : 'tie',
//     price : 1090,
//     rating: {
//         score: 4.5,
//         count: 90
//     },
//     fun : function function1(){
//         console.log('Inside newItems object')
//     }
// }

// newItems.fun()

// Objects are references
//  const myNewItems = newItems 
//  console.log(myNewItems)
//  console.log(newItems)
//  myNewItems.price = 1200
//  console.log(myNewItems)
//  console.log(newItems)

// Built in Objects 
// console.log - log is a method in the console object 
// Math.random - Random is a method in the Math object 
// console.log(typeof console)
// console.log(typeof console.log)
// Another important built in object in JSON.
// JSON objects - Similar to JS objects, but no functions. Will need quotes in both propery and value 
// JS Object makes sense only in JS, while JSON object is more universal
// {
//     "name" : "tie",
//     "price" : 1090,
//     "rating" : {
//         "score" : 4.5,
//         "count" : 90
//     }
// }
// JSON built in Objects will help convert JS objects to JSON
// console.log(JSON.stringify(newItems))
//JSON.parse will convert JSON to JS Objects
// const newItemJson = JSON.stringify(newItems)
// console.log(newItems)
// console.log(newItemJson)
// console.log(JSON.parse(newItemJson))

// // Arrays 
// const myArray = [10,20,30]
// console.log(myArray)
// console.log(myArray[0], myArray[1])
// //change values in array
// myArray[0] = 99
// console.log(myArray)
// //can have any values including objects arrays
// const myArray1 = [1, 'hello', true, {name: 'jinu'}, [10,11,12]]
// //Array is an object. 
// console.log(typeof myArray)
// //Built in Object 
// console.log(Array.isArray(myArray1))
// //As array is object, it also have properties and methods
// // length - Get length
// // push - add new to end of array 
// // splice - to splice array.
// console.log(myArray.length)
// myArray.push(100)
// console.log(myArray)

// myArray.splice(0,1)
// console.log(myArray)

// Loops 
// While loop
// let i = 1;
// while (i<5){
//     console.log(i);
//     i++
// }

// for (let i=1;i<5;i++) {
//     console.log(i)
// }

// While will be used for Non Standard Loops, run the loop until the random number is less than 0.5 
// let randomNumber= 0;
// let i = 1;
// while (randomNumber < 0.9) {
//     randomNumber = Math.random();
//     console.log(`${randomNumber} executing - ${i} time` )
//     i++
// }

// const myArray = [10,20,30,40]
// let sum = 0;
// for (let i=0; i< myArray.length;i++){
//      sum = sum + myArray[i]
// }
// console.log(sum)

// // double each variables in the array
// const doubleArray = [];

// for (let i=0;i<myArray.length;i++){
//     doubleArray[i]=myArray[i]*2
// }

// console.log(doubleArray)

// Arrays also are references

// Advanced features 

// myArray = [10,20,30,40]
// myArray.forEach(function(value,index) {
//     if (value == 20) {
//         console.log('Display value is 20')
//     } 
// });
// //Arrow fucntion
// myArray = [10,20,30,40]
// myArray.forEach((value,index)=>{
//     if (value == 20){
//         console.log('Display value is 20')
//     }
// })

// const myDoubleArray = [];
// myArray.forEach((value,index)=>{
//     myDoubleArray[index] = value*2
// })
// console.log(myDoubleArray)
//written in single line
// const myDoubleArray = [];
// myArray.forEach((value,index)=> myDoubleArray[index] = value*2)
// console.log(myDoubleArray)

//Setinterval(callback function, timer in milliseconds) CntlC to cancel

// setInterval(() => {
//     console.log('Printing after 7 sec')
// }, 7000);

// setTimeout(()=>{
//     console.log('Printing after 5 secs')
// },5000)

// Map - Array 
// output will be array, will have the same number as input array
// const items = [
//     {
//         name : 'Jinu',
//         age: 42,
//         company: 'TCS',
//         salary: 100
//     },
//     {
//         name : 'Niranjan',
//         age: 7,
//         company: 'Naipunya',
//         salary:20
//     },
//     {
//         name : 'Neeraj',
//         age: 7,
//         company: 'Naipunya',
//         salary:30
//     }
// ]

// const ages = items.map((person)=>{return person.age})
// const ages = items.map((person)=>{
//     if (person.age == 7){
//         return person
//     }
//    else {
//         return false
//     }
// })
// console.log(ages)
// const ages = items.map((person)=>return person.age*2)
// const newitems = items.map((person)=>{
//  return {
//     capsname: person.name.toUpperCase(),
//     oldAge: person.age+20
//  }
// })

// console.log(newitems)

// Passing only unique values 

// const ages = items.map((person)=> {return person.age} )
// console.log(ages)
// const uniqueAges = new Set(items.map((person)=> {return person.age}))
// console.log(uniqueAges)

//Dynamic Object keys - Change the property name 
// let name = 'myName'

// const persons = {
//     [name] : 'Jinu'
// }
// console.log(persons)
// const newObject = {
//     name: '',
//     age:''
// }
// const updNewObject =(property, value)=>{
//     newObject[property] = value
// }
// updNewObject('name','jinu')
// updNewObject('age',20)
// updNewObject('job','developer')

// console.log(newObject)
//Filter - returns a new array, can manipulate size of array unlike map
// const young = items.filter((person)=>{
//     if (person.age<10){
//         return person
//     }
//     // return person.age<10
// })

//Arrow function has implicit return and hence no need of return keyword
// const young = items.filter((person)=> person.age>40)

// console.log(young)
//Find - Will provide the first match unlike filter
// const young = items.find((person)=> person.age<10)
// console.log(young)
//Reduce - Iterates call back function and return single value : number, array, Object
// Always should have a return!!!!
// const totalAge = items.reduce((total,person)=>{
//     total += person.age
//     return total
// },0)
//With starting value as 20
// const totalAge = items.reduce((total,person)=>{
//     total += person.age
//     return total
// },20)
// console.log(totalAge)
//Reduce returning objects. Output object is defined

// const total = items.reduce((total,person)=>{
//     total.ageTotal += person.age;
//     total.salaryTotal += person.salary;
//     return total
// },
// {
//     ageTotal:0,
//     salaryTotal: 0
// })
// console.log(total)
// Destructing 
// const age = [42,7,7]
// const age1 = age[0]
// const age2 = age[1]
// const age3 = age[2]
//Destructing Array 
// const [age1,age2,age3] = age
// console.log(age1,age2,age3)
// Destructing first 2 
// const [age1,age2] = age
// console.log(age1,age2)
// Destructing first and last
// const [age1,,age3] = age
// console.log(age1,age3) 
// Using destructing to swap without temporary variables
// let firstName = 'Jinu';
// let lastName = 'Babu';
// console.log(firstName,lastName);
// [lastName, firstName] = [firstName, lastName];
// console.log(firstName,lastName);
// Destructing Objects - Use property name unlike position in arrays
// const myDetails = {
//     firstName : 'Jinu',
//     lastName : ' Babu',
//     age: 42,
//     company: 'TCS',
//     salary: 100,
//     address: {
//         state: 'kerala',
//         district: 'kochi'
//     }
// }

// const {firstName, lastName, age} = myDetails
// console.log(firstName,lastName,age)
// const {firstName, age, company} = myDetails
// console.log(firstName,age,company)
// During destructing renaming the property name
// const {firstName:myName, age} = myDetails
// console.log(myName, age)
// const {firstName, age, address} = myDetails
// console.log(firstName, age, address)
// const {firstName, address:{state}} = myDetails
// console.log(firstName, state)
// const {firstName, address:{state:myState}} = myDetails
// console.log(firstName,myState)
// const printPerson = (person)=>{
//     let {firstName, lastName} = person
//     console.log(firstName,lastName)
// };
//Destructing in the param itself
// const printPerson = ({firstName, lastName})=>{
//     console.log(firstName,lastName)
// };
// printPerson(myDetails);
// const [dad,son1,son2] = items
// console.log(dad)
// Rest operators Seperate remaining items to other variable name
// const age = [42,7,8,35]
// const [dad,...rest] = age
// console.log(dad,rest)
// const [son1,...remaining] = rest
// console.log(dad,son1, remaining)
// Rest should always be placed at the end. 
// const {firstName, ...rest1} = myDetails
// console.log(firstName,rest1)
// const {age, ...rest2} = myDetails
// console.log(age,rest2)
//Rest in functions 
// const getAverage = (name, ...scores)=>{
//     console.log(name);
//     console.log(scores);
//     const averge = scores.reduce((total,score)=>{return total+=score},0)/scores.length;
//     console.log(averge);
// }

// getAverage('Jinu',10,20,30,40)

// Spread operator ... - split into single items and copy them
// const hello = 'hello';
// const letters = [...hello]
// console.log(letters)

// const gents = ['jinu','Neeraj','Niranjan']
// const ladies = ['prasee','asa']
// const father = 'babu'

// const family = [gents,ladies,father]
// console.log(family) // result will be two arrays together
// const family1 = [...gents,...ladies,father]
// console.log(family1)

// As references, changes in any can impact
// const gents1 = gents
// console.log(gents1)
// gents1.push('Babu')
// console.log(gents)
// console.log(gents1)
// As spread This is copy, changes will not impact
// const gents2 = [...gents]
// gents2.push('Asa')
// console.log(gents)
// console.log(gents2)
// Spread on objects
// const myDetails1 = {name: 'Jinu', job: 'developer'}
// const newMyDetails = {...myDetails1, city: 'Kochi'}
// const newMyDetails1 = {...myDetails1, city: 'Kochi', name: 'Neeraj'}
// console.log(newMyDetails)
// console.log(newMyDetails1)

//Call back functions - Pass the parameter and invoke inside the function.
// function makeUppercase(value){
//     console.log(value.toUpperCase());
// };
// makeUppercase('Jinu');
// function makeLowercase(value){
//     console.log(value.toLowerCase());
// };
// makeLowercase('Jinu');
// function reverseString(value){
//     console.log(value.split('').reverse().join(''));
// };
// reverseString('Jinu');
// function handleFullName(name, cb){
//     const fullName = `${name}` + ' Babu';
//     cb(fullName);
// }

// handleFullName('Jinu',makeUppercase)
// handleFullName('Sunu',makeUppercase)
// handleFullName('Jinu',makeLowercase)
// handleFullName('Jinu',reverseString)
// // Instead of variable, can pass the function directly and will be invoked later. 
// handleFullName('Jinu',(value)=>{
//     console.log(value)
// })
//Callback function will be invoked after the timeout
// setTimeout(()=>console.log('First Statement'),1000)
// setTimeout(()=>console.log('Second Statement'),3000)
// setTimeout(()=>console.log('Third Statement'),2000)
// Call back hell
// let firstTiming = 2000
// setTimeout(()=>{
//     console.log('First Statement');
//     setTimeout(()=>{
//         console.log('Second Statement');
//         setTimeout(()=>{
//             console.log('Third Statement')
//         },2000)
//     },3000)
// },firstTiming)
// Promises - To avoid Call back hell. Will have Pending, Rejected, Fullfilled. Initially it will be pending and then go to either resolve or reject
// const promise = new Promise((resolve,reject)=>{
// // resolve('Hello World')
// reject('There was an error')
// })
// console.log(promise)
// promise.then((result)=>console.log(result)).catch((err)=>console.log(err))
// const value = 2
// const promise = new Promise((resolve,reject)=>{
//     const randomNumber = Math.floor(Math.random()*3)
//     console.log(randomNumber)
//     if (randomNumber === value){
//         resolve('Random number matched with Value ')
//     } else {
//         reject('Random number has not matched with value')
//     }
// })

// promise.then((message)=>console.log(message)).catch((err)=>console.log(err))


// const firstTiming = 2000;
// const writeLine = (msg,time)=>{
//     setTimeout(()=>{
//         if (msg.length>10){
//             console.log(msg)
//         }else{
//             console.log('Message length less than 10 charactors')
//         }
//     },time)
// }

// writeLine('This is', firstTiming)
// Using promises-then to print line after specified interval

// const firstTiming = 2000;
// const writeLine = (msg,time)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(msg.length>10){
//                     console.log(msg)
//                     resolve()
//                 }else{
//                     reject('Length of message is less than 10 charactors')
//                 }
//             },time)
//         })
// }
// writeLine('This is first line',firstTiming)
//     .then(()=>writeLine('This is second line',3000)
//     .then(()=>writeLine('This is third Line',2000)))
//     .catch((err)=>console.log(err))
//Using Promise Async Await
// const firstTiming = 2000;
// const secondTiming = 3000;
// const thirdTiming = 2000;
// // const [firstTiming, secondTiming, thirdTiming] = [2000,3000,2000]
// const writeLine = async (msg,time)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 if(msg.length>10){
//                     console.log(msg)
//                     resolve()
//                 }else{
//                     reject('Length of message is less than 10 charactors')
//                 }
//             },time)
//         })
// }


// async function printAllLines (){
//     try {
//         await writeLine('This is first line',firstTiming);
//         await writeLine('This is second line',secondTiming);
//         await writeLine('This is third line',thirdTiming)
//         // await writeLine('This is',thirdTiming)
//     } catch (error) {
//         console.log(error)
//     }
// }
// printAllLines()

// const users = [
//     {id:1, name: 'Jinu'},
//     {id:2, name: 'Prasee'},
//     {id:3, name: 'Niranjan'},
//     {id:4, name: 'Neeraj'}
// ];

// const articles = [
//     {userId: 1, articles:[1,2,3]},
//     {userId: 2, articles:[4,5]},
//     {userId: 3, articles:[6,7,8,9]}
// ];

// const getUser= (name)=>{
//     return new Promise((resolve,reject)=>{
//         const user= users.find((user)=> user.name===name);
//         if(user){
//             return resolve(user);
//         }else{
//             return reject('The user doesnt exist');
//         }
//     })
// };

// const getArticles = (userID)=>{
//     return new Promise((resolve,reject)=>{
//         const article=articles.find((article)=>article.userId === userID)
//         if (article){
//             return resolve(article)
//         }else {
//             return reject('No article for the user')
//         }
//     })
// }

// const getUserArticles = async (name)=>{
//     try {
//         const userSearchResult = await getUser(name);
//         console.log(userSearchResult)
//         const userArticleResult = await getArticles(userSearchResult.id)
//         console.log(userArticleResult)
//     } catch (error) {
//         console.log(error);
//     }    
// }

// getUserArticles('Jinu')

