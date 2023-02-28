const fs = require('fs');

const myFileWriter = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been created`);
  });
};
myFileWriter('File.txt', 'Hello');


const myFileReader = (fileName) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(`Content of ${fileName}: ${data}`);
  });
};
myFileReader('File.txt');


const myFileUpdater = (fileName, content) => {
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    fs.writeFile(fileName, data + content, (err) => {
      if (err) throw err;
      console.log(`${fileName} has been updated`);
    });
  });
};
myFileUpdater('File.txt', ' World');
// myFileReader('File.txt');


const myFileDeleter = (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) throw err;
    console.log(`${fileName} has been deleted`);
  });
};
myFileDeleter('File.txt');
