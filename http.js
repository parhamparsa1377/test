const http=require('http')
const server=http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end('welcome')
    }
    if (req.url==='/about') {
        res.end('this is about us')
    }
res.end('oops')
})
const flattened=require('lodash').flattenDeep([1,[2,33,[5,[6],8]]])
console.log(flattened);
server.listen(5200,()=>{console.log('5200');})