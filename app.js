const express = require('express');
const bodyParser = require('body-parser');
const botActions = require('./botActions');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('Listening to port ', port);
});
app.post('/suggestion', botActions.suggestion);
