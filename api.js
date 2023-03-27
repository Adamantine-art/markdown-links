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

// Reading the Markdown file
const readingTheFile = (randomPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(randomPath, 'utf-8', (error, fileContent) => {
            if (error) {
                reject(error);
            } else {
                resolve(fileContent);
            }
        });
        console.log('Mensaje para verificar si la función es asíncrona');
    });
};
console.log(readingTheFile('README.md'), 'función asíncrona ejecutada');
