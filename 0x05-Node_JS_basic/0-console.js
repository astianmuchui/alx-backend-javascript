const process = require('process');

module.exports = function displayMessage(arg) {
  process.stdout.write(arg);
};
