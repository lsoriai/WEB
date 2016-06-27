//Cargamos express. Esta biblioteca permite crear una servidor
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http); //Instanciamos nuestro servidor http
var PORT = 3000;

//todas las peticiones que se hacen a traves del metodo get a la raiz (justamente el html)
//Lo siguiente escucha la peticion de los navegadores
app.get('/', function(req, res){
	//req: son cabeceras y datos que envia el navegador
	//res: enviamos desde el servidor
	res.sendFile(__dirname +'/index.html');
});

//Escuche las conexiones, de tal manera que cuando la haya el callback nos devuelva el
//socket del que se está conectando y además el identificador de cada cliente.
//Esto hace que el servidor escuche en la conexcion, pero tambien es necesario que 
//el cliente tambien este escuchando, por lo que lo indicamos en el html
io.on('connection', function(socket){
	console.log("usuario id : %s", socket.id);

	//Para indicar el nombre de cada usuario hacemos lo siguiente
	io.emit('message','El usuario '+socket.id+' se ha conectado!', 'System');
	//el cliente provoca un evento cuando nos maanda un mensaje
	socket.on('message', function(mensaje_cliente){
		//emitimos un mensaje para todos aquello cliente que se han conectado a nuestro servidor
		io.emit('message', mensaje_cliente);
	});
	//Como nos podemos desconectar tenemos que habilitar esa opcion
	socket.on('disconnect', function(){
		//Nos enviamos a nosotros mismos un mensaje diciendo que nos desconectamos
		//Hemos de crear tb este evento en nuestro cliente
		console.log("Desconectado: %s", socket.id);
	});
});

//ponemos a escuchar al servidor en el puerto 3000
http.listen(PORT, function(){
  console.log('listening on *:3000');
});