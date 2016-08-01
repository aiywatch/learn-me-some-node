module.exports = function (dir, filter, callback) {
  var fs = require('fs');
  var path = require('path');
  var fileName = [];

  fs.readdir(dir, function(err, files){
    if(err){
      return callback(err);
    }else {
      files.forEach(function(file){
        if('.' + filter === path.extname(file)){

          fileName.push(file);
        }
      });
      return callback(null, fileName);
    }
  })
};



    // var fs = require('fs')
    // var path = require('path')
    
    // module.exports = function (dir, filterStr, callback) {
    
    //   fs.readdir(dir, function (err, list) {
    //     if (err)
    //       return callback(err)
    
    //     list = list.filter(function (file) {
    //       return path.extname(file) === '.' + filterStr
    //     })
    
    //     callback(null, list)
    //   })
    // }