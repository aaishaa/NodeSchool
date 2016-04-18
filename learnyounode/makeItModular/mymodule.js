// must return files filtered by extension (inputted) asynchronously!!
// function (directoryName, filnameExtStr, callbackFunction)
var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileExtStr, callback){
  fs.readdir(dirName, function(err, files){
    if(err){
      return callback(err);
    };
    files = files.filter(function(file){
      return path.extname(file) === '.' + fileExtStr;
    });
    callback(null, files);
  });
};