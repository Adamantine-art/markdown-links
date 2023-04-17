const { pathExistence, isItAbsolute, isItMd, readingTheFile, gettingTheLinks } = require('../api.js');
const mdLinks = require('../index.js');
// const { mdLinks } = require('../index.js');

// API.JS
// Confirming the path's existence
describe('Does the path exist?', () => {
  it('should return true', () => {
    expect(pathExistence('mdTextForTesting.md')).toBe(true);
  });
});

// Converting the relative path into absolute
describe('Converting the relative path', () => {
  it('should convert into absolute', () => {
    expect(isItAbsolute('mdTextForTesting.md')).toBe('C:\\Users\\Lenovo\\Desktop\\Laboratoria\\Markdown Links\\markdown-links\\mdTextForTesting.md');
  });
});

// Checking the file's extension
describe('Is the file .md?', () => {
  it('should return true', () => {
    expect(isItMd('mdTextForTesting.md')).toBe(true);
  });
});

// Reading the markdown file
describe('Reading the .md file', () => {
  it('should read its content', () => {
    expect(readingTheFile('mdTextForTesting.md')).resolves.toBe('✦ Reading the Markdown File ✦')
  });
});

// Getting the links within the markdown file
// describe('Getting the links withing the .md file', () => {
//   it('should return an array', () => {
//     gettingTheLinks('[scripts - Documentación oficial (en inglés)](https://docs.npmjs.com/misc/scripts)')
//       .then(data => {
//         expect(data).toEqual([{
//           href: 'https://docs.npmjs.com/files/package.json',
//           text: 'package.json - Documentación oficial (en inglés)',
//           file: 'README.md'
//         }]);
//       });
//   });
// });

// INDEX.JS
describe('Testing mdLinks function', () => {

  it('returns a Promise', () => {
    expect(mdLinks('mdLinks.md')).toBeInstanceOf(Promise);
  });
});
