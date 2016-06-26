function mostrar(){
  cookie = document.cookie;
  productos = cookie.split(",");
  i = 1;
  while (i<productos.length){
    carro = document.getElementById("carro");
    var fila = document.createElement("ol");
    fila.innerHTML = ""+productos[i]+"";
    carro.appendChild(fila);
    i++;
    fila.style.border = "none";
    fila.style.fontSize = "14px";
    fila.style.fontFamily= "verdana";
    fila.style.padding = "0px";
    fila.style.margin = "0px";
    fila.style.listStyleType = "none";
  } 
}

function setcookie(producto){
  document.cookie = document.cookie + ', bicis:' + producto;
  cookie = document.cookie;
  productos = cookie.split(",");
  console.log(productos+"," +productos.length);
  carro = document.getElementById("carro");
  var fila = document.createElement("ol");
  fila.innerHTML = "bici:"+producto+"";
  carro.appendChild(fila);
  fila.style.border = "none";
  fila.style.fontSize = "14px";
  fila.style.fontFamily= "verdana";
  fila.style.padding = "0px";
  fila.style.margin = "0px";
  fila.style.listStyleType = "none";
}