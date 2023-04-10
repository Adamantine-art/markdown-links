const { pathExistence, isItAbsolute, isItMd, readingTheFile, gettingTheLinks } = require('../api.js');
const { mdLinks } = require('../index.js');

// API.JS
// Confirming the path's existence
describe('Does the path exist?', () => {
  it('should return true', () => {
    expect(pathExistence('mdFile.md')).toBe(true);
  });
});

// Converting the relative path into absolute
describe('Converting the relative path', () => {
  it('should convert into absolute', () => {
    expect(isItAbsolute('mdFile.md')).toBe('C:\\Users\\Lenovo\\Desktop\\Laboratoria\\Markdown Links\\markdown-links\\mdFile.md');
  });
});

// Checking the file's extension
describe('Is the file .md?', () => {
  it('should return true', () => {
    expect(isItMd('mdFile.md')).toBe(true);
  });
});

// Reading the markdown file
describe('Reading the .md file', () => {
  it('should read its content', () => {
    expect(readingTheFile('mdFile.md')).resolves.toBe('✦ Reading the Markdown File ✦')
  });
});

// // Getting the links within the markdown file
// describe('Getting the links withing the .md file', () => {
//   it('should return an array', () => {
//     expect(gettingTheLinks(readingTheFile('mdFile.md'))).toBe([{
//       href: 'https://developer.mozilla.org/',
//       text: 'Random Text',
//       file: 'README.md'
//     }]);
//   });
// });

// // INDEX.JS
// // Testing mdLinks function
// describe('Testing the mdLinks function', () => {
//   it('should return a promise', () => {
//     expect(mdLinks('mdFile.md')).toBe(Promise);
//   });
// });
