const {readFileSync,writeFileSync,readFile,writeFile}=require('fs')

const readable=readFileSync('./texts/first.txt',{encoding:'utf-8'})
const readable2=readFileSync('./texts/second.txt',{encoding:'utf-8'})
const concatinated=readable+readable2
writeFileSync('./texts/write.txt', concatinated,{flag:'a'})
readFile('./texts/first.txt',{encoding:'utf-8'},(cb)=>{console.log(cb);})
console.log('hello world');