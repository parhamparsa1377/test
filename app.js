const { cwd } = require("process")

 //GLOBALS

 ////__dirname
 ////__filename
 ////__require
 ////__module  info about the module
 ////__process info abut the environment where the program is going to run
 const express=require('express')
 const app =express()

const {fork}=require('child_process')

const foked=fork('intro.js')

foked.on('message',message=>{
    console.log('its okay');
})

foked.send('hello')

app.listen(3200,()=>{console.log('3200');})