require("dotenv").config()
const express = require('express');
const app = express();


app.get('/',async (req, res)=>{
    return res.json({success: true, message: "Server is running !"})
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server started successfully");
})