const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Confirming the path's existence
const pathExistence = (randomPath) => {
    if (fs.existsSync(randomPath)) {
        return true;
    } else {
        return 'The path does not exist';
    }
};

// Verifying if the path is absolute, if not, we convert the relative path into absolute
const isItAbsolute = (randomPath) => {
    return (path.isAbsolute(randomPath)) ? randomPath : path.resolve(randomPath);
};

// Checking the file's extension
const isItMd = (randomPath) => {
    return path.extname(randomPath) === '.md';
};

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

// Getting the links within the file with regex
const gettingTheLinks = (readingTheFile) => {
    const linkRegex = /\[([^\]]+)\]\((http[s]?:\/\/[^\)]+)\)/g;
    const linksExtracted = readingTheFile.matchAll(linkRegex)
    return [...linksExtracted]; // converting the object into an array
};

// Validating the links within the array showing status
const validatingTheLinks = (collectedLinks) => {

        let finalObjectValidated = collectedLinks.map((link) => {
            return fetch(link.href)
                .then(data => {
                    return {
                        href: link.href,
                        text: link.text,
                        file: link.file,
                        status: data.status,
                        state: data.statusText,
                    }
                })
                .catch(error => {
                    return {
                        href: link.href,
                        text: link.text,
                        file: link.file,
                        status: error.status,
                        state: error.statusText,
                    }
                });
        })
        return Promise.all(finalObjectValidated);
}

module.exports = {
    pathExistence,
    isItAbsolute,
    isItMd,
    readingTheFile,
    gettingTheLinks,
    validatingTheLinks
};
