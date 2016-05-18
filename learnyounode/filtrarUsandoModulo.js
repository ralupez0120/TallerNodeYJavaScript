var modularizacion = require('./modularizacion');
var dir = process.argv[2];
var ext = process.argv[3];
modularizacion(dir,ext,function mostrarArchivos(err,data){
  if(err)
    console.log('Ha ocurrido un error',err);
  else
    data.forEach(function (archivo){
      console.log(archivo);
    })
});
