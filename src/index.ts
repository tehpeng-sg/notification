const express = require('express'); //import express
const email = require('./routers/email-router');

const app = express();
app.use('/email', email);

const port = 6000;
app.listen(port, () => {
  console.log('listening on http://localhost:' + port);
});
