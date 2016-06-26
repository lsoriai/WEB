function toReadyStateDescription(state) {
  switch (state) {
    case 0:
      return 'UNSENT';
    case 1:
      return 'OPENED';
    case 2:
      return 'HEADERS_RECEIVED';
    case 3:
      return 'LOADING';
    case 4:
      return 'DONE';
    default:
      return '';
  }
}

buscados =[];
function buscador(){
  /*OBTENEMOS EL VALOR DE LO INTRODUCIDO PARA MANDARSELO AL SERVIDOR*/
  /*SI LO QUE INTRODUCIMOS ES MAYOR A 3 ENTONCES ESTABLECEMOS CONEXION*/
  var peticion = document.getElementById("barra_buscador").value;
  if(peticion.length >= 3){
    var xhttp = new XMLHttpRequest();

    /*CUANDO SE PONE EN CONTACTO CON NOSOTROS EL SERVIDOR*/
    xhttp.onreadystatechange = function() {
      console.log('ReadyState changed to: ' + toReadyStateDescription(xhttp.readyState));
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("barra_buscador").innerHTML = xhttp.responseText;
        var respuesta = JSON.parse(xhttp.responseText);

        /*COMPROBAMOS SI TENEMOS CAMPOS PARA INCIAR LA BUSQUEDA*/
        /*REPSUESTA-SUGERENCIAS.LENGTH NOS INDICA CUANTOS ELEMENTOS SE HAN ENCONTRADO CON LOS DIGITOS INDICADOS*/
        if(respuesta.sugerencias.length != 0){
          for(var i=0; i<=respuesta.sugerencias.length-1; i++){
            /*obtiene el nombre*/
            elemento = respuesta.sugerencias[i].opcion; 
            /*Si el elemento que estamos buscando ya lo hemos buscado anteriormente
            entonces tendremos ese elemento habilitado ya en el datalist, sino, hemos de
            crearlo generando un nuevo elementos en el DOM*/
            if (!buscados[elemento]){
              /*creamos el nuevo caso para añadirlo al datalist*/
              var caso = document.createElement("option");
              caso.innerHTML = ""+elemento+"";
              document.getElementById("desplegable").appendChild(caso);
              /*Este array nos ayuda a almacenar las anteriores busquedas con el fin de evitar
              que se dupliquen las entradas en el datalist. Solamente tiene que haber una entrada 
              por elemento. Si no hacemos esto, se habilitará una entrada por cada busqueda puediendose
              repetir la entrada si se repite la busqueda*/
              buscados[elemento]=elemento;
            }
          }
        }
      }
    };
    console.log("antes de enviar el POST");
    xhttp.open("POST", "./buscar_BD", true);
    xhttp.setRequestHeader("Content-type", "text/plain");
    xhttp.send(peticion);
  }
}
