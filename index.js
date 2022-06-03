const express = require('express');
const ENV = require('dotenv').config();
const app = express();
const PORT = 8080;

const { goes } = require('./mongodb/conection.js');

goes();

// console.log(process.env);