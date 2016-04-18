//  prints all files in a given directory

var mymodule = require('./mymodule');

var callBk = function(err, files){
  if(err){
    return console.error('There was an error: ', err);
  }
  files.forEach(function(file){
    console.log(file);
  });
}
mymodule(process.argv[2], process.argv[3], callBk);
