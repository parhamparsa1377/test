const express=require('express')
const app=express()
const {name1,name2,name3}=require('./names')
const os=require('os')
const path=require('path')
const {array,object}=require('./alternativeExport')
require('./especialWay')
function printNames() {
  console.log(`hello ${name1}`);
  console.log(`hello ${name2}`);
  console.log(`hello ${name3}`);
console.log(array);
console.log(object);

}
printNames()

const osModule={
  uptime:os.uptime(),
  userInfo:os.userInfo(),
  release:os.release(),
  type:os.type(),
  totalMemory:os.totalmem(),
  freeMemory:os.freemem()
}
console.log(osModule);
console.log(path.join('/main','galary','1'));
const p=path.basename(__filename) /// intro js
console.log(p);
const resolved=path.resolve(__dirname,'main','galary','1') ///dirname is the path without the file itself 
//// while filename includes the file itself
console.log(resolved);
  app.listen(3000,()=>{console.log('3000');})

