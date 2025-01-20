const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const read = fs.createReadStream(filePath, 'utf-8');

read.on('data', (data) => console.log(data));
