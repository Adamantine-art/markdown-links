const { pathExistence, isItAbsolute, isItMd, readingTheFile } = require('../api.js');

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
