const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

const port = 1245 | process.env.PORT;

app.listen(port, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
