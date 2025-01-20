const fs = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'files-copy');

function copy(files) {
  files.forEach((el) => {
    fs.copyFile(`${folderPath}\\${el}`, `${newFolderPath}\\${el}`, (err) => {
      err ? console.log('Error!') : console.log('Success!');
    });
  })
}

fs.rm(newFolderPath, { force: true, recursive: true }, () => {
  fs.mkdir(newFolderPath, { recursive: true }, () => {
    fs.readdir(folderPath, (err, files) => {
      err ? console.log('Error!') : copy(files);
    })
  })
});
