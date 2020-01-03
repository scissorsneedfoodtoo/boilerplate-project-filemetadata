require('dotenv').config();
const express = require('express');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get("/api/hello", (req, res) => {
  res.json({ greeting: 'Hello API' });
});

const portNum = process.env.PORT || 3000;

app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

module.exports = app; // for testing
