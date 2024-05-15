const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.post('/yourInfo', (req, res) => {
  console.log(req.body);
  res.send(
    `Your Name is '${req.body.firstName} ${req.body.lastName} and your Father's name is '${req.body.fatherName}'`
  );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
