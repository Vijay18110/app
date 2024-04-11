const server=require('express');
const app=server();
const mongoose=require('mongoose');
const  path = require('path');
app.use(server.urlencoded({extended:false}));
app.set('view engine', 'ejs'); 
app.set("views",path.resolve('./views'));
const router=require('./router');
//const url='mongodb+srv://vijay9264996623:vijay123@cluster0.qtfdef4.mongodb.net/mydb';
app.use('/user',router);
const startserver=require('./controller/server');
app.listen(8000,startserver);
app.get('/api/form',(req,res)=>{
    res.render('form');
})

