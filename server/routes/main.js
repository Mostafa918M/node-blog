const express = require('express')
const router = express.Router();

router.get('',(req,res)=>{
    const locals = {
        title:"node-Blog",
        description:"Simple Blog Using nodejs,Express & MongoDb"
    }
    res.render('index' ,locals);
})

router.get('/about',(req,res)=>{
    const locals = {
        title:"node-Blog/About",
        description:"Simple Blog Using nodejs,Express & MongoDb"
    }
    res.render('about',locals)
})

router.get('/contact-us',(req,res)=>{
    res.render('contactUs')
})
module.exports= router;