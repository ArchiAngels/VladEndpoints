const express = require('express');
const {goes} = require('../mongodb/conection.js');
const test = express.Router();

// define the home page route
test.get('/getData/:time', async(req, res) => {

  let reqex = /^[0-9]+$/gi;

  let setTimeoutMS = parseInt(req.params.time.match(reqex));
      setTimeoutMS = setTimeoutMS > 0 ? setTimeoutMS : 500;

  let a = await goes(setTimeoutMS);
  
  res.send({DATA:a,yourMS:req.params.time,SYSms:setTimeoutMS});
})

module.exports = test;