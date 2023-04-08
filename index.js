const { pathExistence, isItAbsolute, isItMd, readingTheFile, gettingTheLinks } = require('./api');

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        if (!pathExistence(path)) {
            reject('The path does not exist');
            return; // preguntar si se puede return reject
        }

        if (!isItAbsolute(path)) {
            reject('The path is relative, should convert into an absolute path');
            return;
        }

        if (!isItMd(path)) {
            reject('The file is not .md');
            return;
        }

        // Executing the promise
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
            console.log(finalObject);

        }).catch((err) => {
            console.log(err);
        });
    })
};

module.exports = mdLinks;
