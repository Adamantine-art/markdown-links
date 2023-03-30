const fs = require('fs');
const path = require('path');

// Confirming the path's existence
const pathExistence = (randomPath) => {
    if (fs.existsSync(randomPath)) {
        return true
    } else {
        return 'The path does not exist';
    }
};
console.log(pathExistence('README.md'), '<- does the path exist?');

// Verifying if the path is absolute
const isItAbsolute = (randomPath) => path.isAbsolute(randomPath)
console.log(isItAbsolute('mdFile.md'), '<- is it absolute?');

// Converting the relative path into absolute
const relativeToAbsolute = (randomPath) => {
    return path.resolve(randomPath);
};
console.log(relativeToAbsolute('mdFile.md'), '<- converting the relative path into absolute');

// Checking the file's extension
const isItMd = (randomPath) => {
    return path.extname(randomPath) === '.md';
};
console.log(isItMd('mdFile.md'), '<- is the file .md?');

// Reading the markdown file
const readingTheFile = (randomPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(randomPath, 'utf-8', (error, fileContent) => { 
            if (error) { 
                reject(error);
            } else {
                resolve(fileContent);
            }
        });
    });
};

// Executing the promise
readingTheFile('mdFile.md').then((mdContent) => {
    console.log(mdContent);
}).catch((err) => {
    console.log(err);
});

// Getting the links within the file
// RegExp

module.exports = {
    pathExistence,
    isItAbsolute,
    relativeToAbsolute,
    isItMd,
    readingTheFile
};
