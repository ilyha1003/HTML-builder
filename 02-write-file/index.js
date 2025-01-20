const fs = require('fs');
const path = require('path');
const readline = require('readline');

const filePath = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(filePath);
console.log('Enter text here:');

function filling(str) {
  writeStream.write(`${str}\n`);
}

function handling(input) {
  if (input === 'exit') {
    writeStream.end();
    process.exit();
  } else {
    filling(input);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', handling);

process.on('exit', () => {
  console.log('See u next time!');
});
