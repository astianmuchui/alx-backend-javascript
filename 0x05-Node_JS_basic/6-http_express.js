const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});


const PORT = 1245;
app.listen(PORT);

module.exports = app;
