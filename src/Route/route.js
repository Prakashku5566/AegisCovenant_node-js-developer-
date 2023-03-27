const express = require('express');
const router = express.Router();
const {getcaptcha}= require("../Controller/controller")
router.get("/test-me",  function (req, res) {
    res.send("My first ever api!")
})

router.post("/getcaptcha",getcaptcha);

router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"check url"})
    })
    module.exports = router;