var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function (err,lista){
	for(var i=0; i<lista.length;i++){
		var extension = path.extname(lista[i]);
		if(extension=='.'+process.argv[3]){
			console.log(lista[i]);
		}
	};
});