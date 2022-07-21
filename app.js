const express = require('express');
const {resolve} = require('path');
const app = express();
const port = process.env.PORT || 2020;
app.listen(port);
const public = resolve(__dirname, 'public');
const static = express.static(public);
app.use(static);

app.get('/', (req, res) => {
  let view = resolve(__dirname, 'views','home.html');
  return res.sendFile(view);
}) 