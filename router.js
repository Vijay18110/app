const { request } = require('express');
const server=require('express');
const mongoose=require('mongoose');
const res = require('express/lib/response');
const router=server.Router();
router.use(server.json());


const postmethod=require('./controller/post');
 
router.post('/',postmethod);

    
module.exports=router;