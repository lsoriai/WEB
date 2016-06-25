var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
  console.log('request starting...');
  console.log(request.method + ": " + request.url);

  var filePath = '.' + request.url
  if (filePath == './'){
    filePath = './index.html'
  }

  if (request.method == 'GET'){
    console.log("METODO GET");
    fs.exists(filePath, function(exists) {
    /*Comprueba si existe el directorio, en tal caso llama al Callback asociado*/
      if(exists){
        /*Leemos el archivo para mandarselo al cliente*/
        console.log("EL ARCHIVO EXISTE");
        fs.readFile(filePath, function(error, data) {
          if(error){
            console.log("ERROR AL LEER EL ARCHIVO");
            response.writeHead(500);
            response.end();
          }else{
            /*Obtenemos el contentType para mandarlo junto con un 200 OK*/
            console.log("SE HA PODIDO LEER EL ARCHIVO");
            var contentType = '';    
            var extname = path.extname(filePath); 
            switch (extname) {
              case '.js':
                contentType = 'text/javascript';
                break;
              case '.css':
                contentType = 'text/css';
                break;
              case '.gif':
                contentType = 'image/gif';
                break;
              case '.jpg':
                contentType = 'image/jpg';
                break;
              case '.html':
                contentType = 'text/html';
                break;
            }
            console.log("EL CONTENT TYPE ES: "+ contentType);
            response.writeHead(200, {'Content-Type': contentType });
            response.end(data, 'utf-8');
          }
        });
      }else{
        console.log("EL ARCHIVO NO EXISTE");
        response.writeHead(404);
        response.end();
      }
    });
  }else{
    if (filePath == './registrar.html'){
      console.log("METODO POST");
      /*Tenemos un formulario. Extraemos la informacion*/
      request.on('data', function(datos){
        var form = datos.toString();
        console.log(form);
        var campos = form.split("&");
        console.log(campos);
        var nombre = campos[0].split("=")[1];
        console.log(nombre);
        var apellidos = campos[1].split("=")[1];
        console.log(apellidos);
        var sexo = campos[2].split("=")[1];
        console.log(sexo);
        var edad = campos[3].split("=")[1];
        console.log(edad);
        var texto = campos[4].split("=")[1];
        console.log(texto);
        var color = campos[5].split("=")[1];
        console.log(color);
        var fecha = campos[6].split("=")[1];
        console.log(fecha);

        form = '<!DOCTYPE html>\
                <html>\
                <head>\
                  <link rel="stylesheet" href="style.css"/>\
                  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster/">\
                </head>\
                <body>\
                  <header>\
                    <nav>\
                      <p id="titulo">Tu tienda online</p>\
                    </nav>\
                  </header>\
                    <div id="contenedor">\
                      <aside>\
                        <div id="barra_lateral">\
                          <ul class = "menu">\
                            <li><a href ="index.html">Inicio</a></li>\
                            <li><a href ="bicis.html">Bicicletas</a></li>\
                            <li><a href ="discos.html">Discos</a></li>\
                            <li><a href ="libros.html">Libros</a></li>\
                            <li><a href ="registrar.html">Registrarse</a></li>\
                          </ul>\
                        </div>\
                      </aside>\
                      <section>\
                        <div id="Contenido">\
                          <h1>Bienvenido, sus datos son los siguintes:</h1><br><br>\
                          <p><b>Nombre: </b>'+nombre+'</p>\
                          <p><b>Apellidos: </b>'+apellidos+'</p>\
                          <p><b>Sexo: </b>'+sexo+'</p>\
                          <p><b>Edad: </b>'+edad+'</p>\
                          <p><b>Motivo: </b>'+texto+'</p>\
                          <p><b>Color: </b>'+color+'</p>\
                          <p><b>Fecha: </b>'+fecha+'</p>\
                          </form>\
                        </div>\
                      </section>\
                    </div>\
                </body>\
                </html>';
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(form);
      });
    }
  }
}).listen(1087);

console.log('Server running at http://127.0.0.1:1087/');