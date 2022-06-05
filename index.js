const express = require('express');
const ENV = require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const test = require('./routes/getData.js');

app.listen(PORT,()=>{
    let msg = `\n\n\n\t\tServer Running on port ${PORT}\n\n\n`;
    console.log(msg);
})

app.get('/',function(req,res){
    let path = require('path');
    let html = path.join(__dirname,'../','text.html')
    res.sendFile(html);
})


app.use('/testAPI', test);