var http = require('http');
var fs = require('fs');
var path = require('path');
http.createServer(function (request, response) {
  console.log('request starting...');
  console.log(request.url);
  
  var filePath = '.' + request.url;
  if (filePath == './')
    filePath = './index.html';
  fs.exists(filePath, function(exists) {
    /*Comprueba si existe el directorio, en tal caso llama al Callback asociado*/
    if(exists){
      /*Leemos el archivo para mandarselo al cliente*/
      fs.readFile(filePath, function(error, data) {
        if(error){
          response.writeHead(500);
          response.end();
        }else{
          /*Obtenemos el contentType para mandarlo junto con un 200 OK*/
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
          response.writeHead(200, {'Content-Type': contentType });
          response.end(data, 'utf-8');
        }
      });
    }else{
      response.writeHead(404);
      response.end();
    }
  });
}).listen(1087);

console.log('Server running at http://127.0.0.1:1087/');