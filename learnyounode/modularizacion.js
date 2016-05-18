var fs = require('fs');
var path = require('path');
module.exports = function(directorio,extension,callback){
      fs.readdir(directorio,function(err,lista){
        if(err)
          return callback(err);
        else {
            lista = lista.filter(function archivosFiltrados(archivo){
              return (path.extname(archivo)==='.'+extension)
            });
          callback(null,lista);
        }
      });
  }
