// Built in Modules - Many are there. Reviewing the most important ones to understand the concept 
// OS, Path, FS, HTTPS 
// const os = require('os')
// const path = require('path')
// const fs = require('fs')
// const { dirname } = require('path')
// const {readFileSync, writeFileSync} = require('fs')
// const {readFile, writeFile} = require('fs')
//info about current users , uptime - Check the os module document for further information. 
// const user = os.userInfo()
// const upTime = os.uptime()
// console.log(user, upTime)
// The Path module provides a way of working with directories and file paths.
// const lastPath = path.basename(module.path);
// const parsePath = path.parse(module.path);
// const filePath = path.join('./content','newfolder','test.txt')
// const base = path.basename(filePath)
// const absolutePath = path.join(__dirname,filePath)
// console.log(filePath, base, absolutePath)

// console.log(lastPath, parsePath)
// FS The Node.js file system module allows you to work with the file system on your computer.

// const data = readFileSync(filePath,'utf8');
// console.log(data);
// newData = 'This is second line in test.txt'
// writeFileSync(filePath, newData, {flag: 'a'})
// newData1 = 'This is third line in test.txt in new line'
// writeFileSync(filePath,"\n"+newData1, {flag: 'a'})

// using Async

// fs.readFile(filePath,'utf-8',(err,result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)

// })

