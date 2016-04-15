var fs = require('fs');

var lines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1; //'utf8' returns string instead of buffer object
console.log(lines);