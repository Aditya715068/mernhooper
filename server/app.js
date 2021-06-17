const express = require('express');
const app= express();
const mongoose= require('mongoose');
const dotenv=require('dotenv');


require('./db/conn');

//const Users= require('./model/userSchema');


app.use(express.json());

app.use(require('./router/auth.js'))


const middleware = (req,res,next)=>{
console.log("hello");
next();
};


app.get('/', (req,res)=> {
      res.send(`hello world from server `)
});
app.get('/about', middleware , (req,res)=> {
    res.send(`hello about world from server `)
});
app.get('/contact', (req,res)=> {
    res.send(`hello contact from server `)
});


app.get('/singin', (req,res)=> {
    res.send(`hello contact from server `)
});


app.get('/singup', (req,res)=> {
    res.send(`hello contact from server `)
});

app.listen(3000,()=>{
    console.log("serveris running");
})