const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'secret-folder');

function infoOutput(files) {
  files.forEach((el) => {
    if (!el.isFile()) {
      console.log(`${el.name} is not a file!!!`);
    } else {
      let ext = path.extname(`${el.name}`);

      fs.stat(`${folderPath}\\${el.name}`, (err, states) => {
        err
          ? console.log('Error!')
          : console.log(`${el.name.split('.')[0]} - ${ext.slice(1)} - ${(states.size / 1024).toFixed(3)}kb`);
      });
    }
  });
}

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  err ? console.log('Error!') : infoOutput(files);
});
