const readl = require('readline');

const rl = readl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?', (answer) => {
  process.stdout.write(`Your name is: ${answer}!`);
  rl.close();
});

rl.on('close', () => {
  process.stdout.write('This important software is now closing\n');
  process.exit(0);
});
