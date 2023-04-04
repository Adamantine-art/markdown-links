const { pathExistence, isItAbsolute, relativeToAbsolute, isItMd, readingTheFile, gettingTheLinks } = require('./api');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (pathExistence(path) == true) {
      const absolutePath = isItAbsolute(path)

      
    } else {
      
    }
  });
};

module.exports = mdLinks;
