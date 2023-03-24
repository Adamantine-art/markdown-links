const fs = require('fs');
const path = require('path');

// Confirming the path's existence
const pathExistence = (randomPath) => fs.existsSync(randomPath)
console.log(pathExistence('README.md'))

// Verifying if the path is absolute
const isItAbsolute = (randomPath) => path.isAbsolute(randomPath)
console.log(isItAbsolute('mdLinks.md'))
