const { pathExistence, isItAbsolute, relativeToAbsolute, isItMd, readingTheFile } = require('../api.js');

// Confirming the path's existence
describe('Does the path exist?', () => {

  it('should return true', () => {
    expect(pathExistence('mdFile.md')).toBe(true);
  });
});

// Verifying if the path is absolute
describe('Is the path absolute?', () => {

  it('should return false', () => {
    expect(isItAbsolute('mdFile.md')).toBe(false);
  });
});

// Converting the relative path into absolute
describe('Converting the relative path', () => {

  it('should convert into absolute', () => {
    expect(relativeToAbsolute('mdFile.md')).toBe('C:\\Users\\Lenovo\\Desktop\\Laboratoria\\Markdown Links\\markdown-links\\mdFile.md');
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
    expect(readingTheFile('mdFile.md')).toBe('✦ Reading the Markdown File ✦');
  });
});
