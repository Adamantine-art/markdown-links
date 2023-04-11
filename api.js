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
    return new Promise((resolve) => {
        let finalObject = collectedLinks.map((link) => {
            fetch(link.href)
            // Promise.allSettled()
                .then(data => {
                    console.log(data)
                    return {
                        href: link.href,
                        text: link.text,
                        file: link.file,
                        status: data.status,
                        statusMessage: data.statusText,
                        ok: 'ok'
                    }
                })
                .catch(error => {
                    console.log(error)
                    return {
                        href: link.href,
                        text: link.text,
                        file: link.file,
                        status: error.status,
                        statusMessage: error.statusText,
                        ok: 'fail'
                    }
                });
        })
        resolve(finalObject);
})
};



readingTheFile('README.md').then((mdContent) => {
    const links = gettingTheLinks(mdContent);
    const finalObject = [];
    for (let i = 0; i < links.length; i++) { // accessing to the array
        const element = links[i][0]; //accessing to the first element of the array(text)
        const linkText = element.replace("[", "").replace(")", ""); // replacing [ & ) with empty strings to clean the text
        const arrayLink = linkText.split("]("); // splitting the text from the link

        // Creating the Object within the previous array
        finalObject.push({
            href: arrayLink[1],
            text: arrayLink[0],
            file: 'README.md',
        })
    }
    validatingTheLinks(finalObject).then((webo) => {
        console.log(webo);
    });
    //console.log(finalObject);

}).catch((err) => {
    console.log(err);
});

module.exports = {
    pathExistence,
    isItAbsolute,
    isItMd,
    readingTheFile,
    gettingTheLinks,
};
