const fs = require('fs');
const path = require('path');

// Confirming the path's existence
const pathExistence = (randomPath) => {
    if (fs.existsSync(randomPath)) {
        return true;
    } else {
        return 'The path does not exist';
    }
};
// console.log(pathExistence('README.md'), '<- does the path exist?');

// Verifying if the path is absolute, if not, we convert the relative path into absolute
const isItAbsolute = (randomPath) => {
    return (path.isAbsolute(randomPath)) ? randomPath : path.resolve(randomPath);
};
// console.log(isItAbsolute('mdFile.md'), '<- is the path absolute?');

// Checking the file's extension
const isItMd = (randomPath) => {
    return path.extname(randomPath) === '.md';
};
// console.log(isItMd('README.md'), '<- is the file .md?');

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

// Executing the promise - pasar a mdLinks
readingTheFile('README.md').then((mdContent) => {
    const links = gettingTheLinks(mdContent);
    for (let i = 0; i < links.length; i++) {
        const element = links[i][0];
        const linkText = element.replace("[","").replace(")","");
        const arrayLink = linkText.split("](");
        console.log(arrayLink);
    }
    // obj href, text, file
}).catch((err) => {
    console.log(err);
});

// Getting the links within the file with regex
const gettingTheLinks = (readingTheFile) => {
    const linkRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
    const linksExtracted = readingTheFile.matchAll(linkRegex)
    return [...linksExtracted];
};

module.exports = {
    pathExistence,
    isItAbsolute,
    isItMd,
    readingTheFile,
    gettingTheLinks
};
