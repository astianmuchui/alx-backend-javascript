const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.send(`This is the list of our students\n${await countStudents(process.argv[2])}`);
  res.end();
});

const PORT = 1245;
app.listen(PORT);

module.exports = app;
