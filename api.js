const fs = require('fs'); 
const path = require('path'); 

// Confirming the path's existence
const pathExistence = (randomPath) => { // preguntar si los errores se pueden tomar solo con if else
    if (fs.existsSync(randomPath)) {
        return true
    } else {
        return 'The path does not exist';
    }
};
console.log(pathExistence('README.md'), 'does the path exist?');

// Verifying if the path is absolute
const isItAbsolute = (randomPath) => path.isAbsolute(randomPath)
console.log(isItAbsolute('README.md'), 'is it absolute?');

// Converting the relative path into absolute
const relativeToAbsolute = (randomPath) => {
    return path.resolve(randomPath);
};
console.log(relativeToAbsolute('README.md'));

// Checking the file's extension
const isItMd = (randomPath) => {
    return path.extname(randomPath) === '.md';
};
console.log(isItMd('README.md'), 'is the file .md?');
