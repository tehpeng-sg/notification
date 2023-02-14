
const express = require('express'); //import express

// create router
const router = express.Router();

const app = express();
 
app.get('/', (request, response) => {
  response.send('Hello world!');
});
 
app.listen(6000);