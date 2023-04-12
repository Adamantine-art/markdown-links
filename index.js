const { pathExistence, isItAbsolute, isItMd, readingTheFile, gettingTheLinks, validatingTheLinks } = require('./api');

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        if (!pathExistence(path)) {
            return reject('The path does not exist');
        }

        if (!isItAbsolute(path)) {
            return reject('The path is relative, should convert into an absolute path');
        }

        if (!isItMd(path)) {
            return reject('The file is not .md');
        }

        if (!options || !options.validate) {
            return readingTheFile(path).then((mdContent) => {
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
                        file: path,
                    })
                }
                 console.log(finalObject);
            
            }).catch((err) => {
                console.log(err);
            });
        }

        if  (options.validate) {
            return readingTheFile(path).then((mdContent) => {
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
                        file: path,
                    })
                }
                validatingTheLinks(finalObject).then(console.log); // console log de validatingTheLinks
            })
        };
    })
};
mdLinks('README.md', {validate: false});

module.exports = mdLinks;
