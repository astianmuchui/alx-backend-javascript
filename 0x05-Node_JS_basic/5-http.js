const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  try {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
      res.write('Hello Holberton School!');
    } else if (req.url === '/students') {
      res.write('This is the list of our students\n');

      const data = countStudents('./database.csv');

      res.end(`${data.join('\n')}`);
    } else {
      res.statusCode = 404;
      res.write('Not Found');
    }
  } catch (error) {
    res.statusCode = 500;
    res.write(error.message);
  } finally {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
