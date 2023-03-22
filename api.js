// Confirming the path's existence

const fs = require('fs');

const path = __dirname + '/README.md';

if (fs.existsSync(path)) {
    console.log('File exists :)');
};
