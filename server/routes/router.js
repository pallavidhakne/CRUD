const express=require('express');
const route=express.Router();
const services=require('../services/render')

const controller =require('../controller/controller')
//we just seperate the render part of the function 
// in new file services/render it will help us to simplefy the code
//instant of function we access the render file function

route.get('/',services.homeRoutes);
/*
  @description add user
  @method GET /add user
*/
route.get('/add-user',services.addUser);
/*
  @description update user
  @method GET /update-user
*/
route.get('/update-user',services.updateUser);


//Api 
// to create and add user we can use post method

route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)
module.exports=route