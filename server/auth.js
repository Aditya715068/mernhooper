const { Router } = require('express');
const express = require('express');
const router =express.Router();
const jwt= require("jsonwebtoken");
const  bcrypt =require('bcryptjs');

require('../db/conn');

const User = require('../model/userSchema')

router.get('/', (req,res)=> {
    res.send(`hello world from server `)
});


router.post('/register', async (req,res)=>{
    const { name,email, phone,work,password,cpassword}= req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({ error:"plz fill the form properly"});
    }

    try{
    const userExist =  await User.findOne({email:email});
     
        if(userExist){
            return res.status(422).json({ error:"user exist"});
        }
         else if(password != cpassword){
            return res.status(422).json({ error:"password not matching"});
        }else{
     const user= new User({name,email, phone,work,password,cpassword});
     



    await user.save();

        return res.status(201).json({ message:"registered successfuly"});
        } 
    
     



    } catch(err)
    {console.log(err);}
    
    //console.log(req.body);
    //res.json({ message: req.body});

});



router.post('/signin', async(req,res)=>{
     
try{
    let token;
    const{email, password}= req.body;

    if(!email || !password){
        return res.status(400).json({ error:"plz fill data"});

    }
  
   const userlogin = await User.findOne({email: email});
   
  // console.log(userlogin);


   if(userlogin){
       const isMatch = await bcrypt.compare(password, userlogin.password);

     token = await userlogin.generatAuthToken();

    console.log(token);

    res.cookie("jwttoken",token ,{
        exports: new Date(Date.now()+ 25892000000),
        httpOnly: true
    })


   if(!isMatch){    
    return res.status(400).json({ error:"user error"});
   }else{
   res.json({message: " user singin successfully"});
   }
}else {
    res.status(400).json({ error: " invalid credientials"});
}
  


} catch(err){
    console.log(err);
}
})




module.exports = router;