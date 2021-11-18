 const express = require('express')//import express module
 const router = express.Router()//create express router
   
 //we created our first router for HOME PAGE
 router.get('/',(req,res,next)=>{  
     const data = req.context
       
     res.render('home',data)
 })

 module.exports = router 