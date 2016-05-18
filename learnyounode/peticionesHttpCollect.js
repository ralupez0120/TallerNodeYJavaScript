var http = require('http');
var cadena = '';
var total = 0;
http.get(process.get[2],function(response){
	response.on('data',function(data){
		cadena = cadena + data.toString();
		total += data.toString().length;
	}
	});
	response.on('error',function(err){
		cadena = cadena + err.toString();
		total += err.toString().length;
	});
})