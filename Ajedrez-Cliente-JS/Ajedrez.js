var celdas, pieza, antiguo;
var posibles_movimientos = [];
var en_movimiento = false;
var piezas = ["♜", "♞", "♝", "♛", "♚", "♟"];
function start(){
	//Asociamos el atributo onclick a todas las celdas
	celdas = document.querySelectorAll("td");
	for(i=0; i<celdas.length; i++){
		celdas[i].setAttribute("onclick", "juega(this)", false);
	};
	console.log (celdas);
};

function juega(elemento){
	var aceptada = false;
	if(en_movimiento == false && elemento.className != ""){
		antiguo = elemento;
		pieza = elemento.innerHTML;
		elemento.style.opacity = ".4";
		en_movimiento = true;
		posibles_movimientos = posibles_celdas(elemento);
		pintar(posibles_movimientos);
		if (posibles_movimientos == ""){
			elemento.style.opacity = "1";
			en_movimiento = false;
		}
	}else if(en_movimiento == true){
		for(var i=0; i<posibles_movimientos.length; i++){
			if(elemento.id == posibles_movimientos[i]){
				aceptada = true;
			};
		};
		if (aceptada == true){
			elemento.innerHTML = antiguo.innerHTML;
			elemento.className = antiguo.className;
			antiguo.innerHTML = "";
			antiguo.style.opacity = "1";
			antiguo.className = "";
			en_movimiento = false;
			estilo_original(posibles_movimientos);
		};
	};
};

function posibles_celdas(elemento){
	var posicion_pieza = elemento.id;
	fila = posicion_pieza.substr(0,1);
	columna = posicion_pieza.substr(1,2);
	for (var pos = 0; pos < piezas.length; pos++){
		if (piezas[pos] == pieza){
			if (pos == 0){
				console.log("es una torre");
				return (movimiento_torre(fila, columna, false));
			}else if (pos == 1){
				console.log("es un caballo");
				return (movimiento_caballo(fila, columna));
			}else if (pos == 2){
				console.log("es un alfil");
				return(movimiento_alfil(fila, columna, false));
			}else if (pos == 3){
				console.log("es una dama");
				return(movimiento_dama(fila, columna, false));
			}else if (pos == 4){
				console.log("es un rey");
				return(movimiento_rey(fila, columna));
			}else if (pos == 5){
				console.log("es un peon");
				return(movimiento_peon(fila, columna));
			}
		}
	}
};

function localiza_piezas(){
	var piezas = [];
	celdas = document.querySelectorAll("td");
	for(var i=0; i<celdas.length; i++){
		if (celdas[i].className != ""){
			piezas.push(celdas[i].id);
		};
	};
	return(piezas);
};

function colision(celda, ocupadas, equipo, rey){
	var aux = 0;
	var choca = false;
	while (choca == false && aux<ocupadas.length){
		if (celda == rey){
			return("rey");
		}else if(celda == ocupadas[aux]){
			equipo_choca = document.getElementById(ocupadas[aux]).className;
			if(equipo_choca == equipo){
				return("mismo equipo");
			}else{
				return("diferente equipo");
			};
			choca = true;
		};
		aux++
	};
	return ("no colisiona");
};

function pintar (celdas_posibles){
	for (i=0; i<celdas_posibles.length; i++){
		celda = celdas_posibles[i];
		fila = celda.substr(0,1);
		columna = celda.substr(1,2);
		document.getElementById(fila+columna).style.backgroundColor = "orange";
		if(fila % 2 == 0 && columna % 2 == 1){
			document.getElementById(fila+columna).style.opacity = ".6";
		}else if(fila % 2 == 1 && columna % 2 == 0){
			document.getElementById(fila+columna).style.opacity = ".6";
		}else{
			document.getElementById(fila+columna).style.opacity = ".3";
		};
	};
 };

function estilo_original (celdas){
	for (i=0; i<celdas.length; i++){
		celda = celdas[i];
		fila = celda.substr(0,1);
		columna = celda.substr(1,2);
		document.getElementById(fila+columna).style.backgroundColor = "";
		document.getElementById(fila+columna).style.cssText = "";
	};
};

function celdas_posibles (direccion, fila, columna, ocupadas, celdas_posibles, ataque_rey){
	var choca = false;
	var fin_tablero = false;
	var contador_fila = fila;
	var contador_columna = columna;
	var equipo = document.getElementById(fila+columna).className;
	if (direccion == "caballo"){
		var pos_caballo = [(parseInt(fila)+2).toString() + (parseInt(columna)+1).toString(),
						   (parseInt(fila)+2).toString() + (parseInt(columna)-1).toString(),
						   (parseInt(fila)-2).toString() + (parseInt(columna)+1).toString(),
						   (parseInt(fila)-2).toString() + (parseInt(columna)-1).toString(),
						   (parseInt(fila)+1).toString() + (parseInt(columna)+2).toString(),
						   (parseInt(fila)-1).toString() + (parseInt(columna)+2).toString(),
						   (parseInt(fila)+1).toString() + (parseInt(columna)-2).toString(),
						   (parseInt(fila)-1).toString() + (parseInt(columna)-2).toString()];
		for (var i=0; i<pos_caballo.length; i++){
			var fila = pos_caballo[i].substr(0,1);
			var columna = pos_caballo[i].substr(1,2);
			if ((parseInt(fila)<9 && parseInt(fila)>0) && (parseInt(columna)<9 && parseInt(columna)>0) && pos_caballo[i].length == 2){
				var respuesta = colision(fila+columna, ocupadas, equipo);
				if (respuesta != "mismo equipo"){
					celdas_posibles.push(fila.toString()+columna.toString());
				};
				if (respuesta != "no colisiona"){
					choca =true;
				};
			};
		};
	}else if (direccion == "peon"){
		if (fila == 2 && equipo == "ficha_negra"){
			var pos_peon = [(parseInt(fila)+1).toString() + columna,
							(parseInt(fila)+2).toString() + columna,
							(parseInt(fila)+1).toString() + (parseInt(columna)-1).toString(),
							(parseInt(fila)+1).toString() + (parseInt(columna)+1).toString()];
		}else if(fila == 7 && equipo == "ficha_blanca"){
			var pos_peon = [(parseInt(fila)-1).toString() + columna,
							(parseInt(fila)-2).toString() + columna,
							(parseInt(fila)-1).toString() + (parseInt(columna)-1).toString(),
							(parseInt(fila)-1).toString() + (parseInt(columna)+1).toString()];
		}else if (equipo == "ficha_blanca"){
			var pos_peon = [(parseInt(fila)-1).toString() + columna,
							(parseInt(fila)-1).toString() + (parseInt(columna)-1).toString(),
							(parseInt(fila)-1).toString() + (parseInt(columna)+1).toString()];
		}else if (equipo == "ficha_negra"){
			var pos_peon = [(parseInt(fila)+1).toString() + columna,
							(parseInt(fila)+1).toString() + (parseInt(columna)-1).toString(),
							(parseInt(fila)+1).toString() + (parseInt(columna)+1).toString()];
		};
		for (var i=0; i<pos_peon.length; i++){
			var fila = pos_peon[i].substr(0,1);
			var columna = pos_peon[i].substr(1,2);
			if ((parseInt(fila)<9 && parseInt(fila)>0) && (parseInt(columna)<9 && parseInt(columna)>0)){
				var respuesta = colision(fila+columna, ocupadas, equipo);
				if (pos_peon.length == 3){
					if (i == 0 && respuesta == "no colisiona"){
						celdas_posibles.push(fila.toString()+columna.toString());
					}else if (i != 0 && respuesta == "diferente equipo"){
						celdas_posibles.push(fila.toString()+columna.toString());
					};
				}else if (pos_peon.length == 4){
					 if((i == 0 || i == 1) && respuesta == "no colisiona"){
					 	celdas_posibles.push(fila.toString()+columna.toString());
					 }else if((i == 2 || i == 3) && respuesta == "diferente equipo"){
					 	celdas_posibles.push(fila.toString()+columna.toString());
					 };
				}else{
				};
			};
		};
	}else if (direccion == "rey"){
		var pos_rey = [(parseInt(fila)+1).toString() + columna,
					   (parseInt(fila)-1).toString() + columna,
					   fila + (parseInt(columna)+1).toString(),
					   fila + (parseInt(columna)-1).toString(),
					   (parseInt(fila)-1).toString() + (parseInt(columna)-1).toString(),
					   (parseInt(fila)-1).toString() + (parseInt(columna)+1).toString(),
					   (parseInt(fila)+1).toString() + (parseInt(columna)+1).toString(),
					   (parseInt(fila)+1).toString() + (parseInt(columna)-1).toString()];
		var celda_rey = fila+columna;
		var pos_de_ataque = [];
		if (equipo == "ficha_blanca"){
			var piezas_ataque = document.getElementsByClassName("ficha_negra");
		}else{
			var piezas_ataque = document.getElementsByClassName("ficha_blanca");
		};
		console.log(piezas_ataque);
		for(var i = 0; i<piezas_ataque.length; i++){
			fila = piezas_ataque[i].id.substr(0,1);
			columna = piezas_ataque[i].id.substr(1,2);
			var posiciones = [];
			console.log(piezas_ataque[i].innerHTML);
			if (piezas_ataque[i].innerHTML == piezas[0]){
				posiciones = movimiento_torre(fila,columna, celda_rey);
			}else if (piezas_ataque[i].innerHTML == piezas[1]){
				posiciones = movimiento_caballo(fila,columna, celda_rey);
			}else if (piezas_ataque[i].innerHTML == piezas[2]){
				posiciones = movimiento_alfil(fila,columna, celda_rey);
			}else if (piezas_ataque[i].innerHTML == piezas[3]){
				posiciones = movimiento_dama(fila,columna, celda_rey);
			}else if (piezas_ataque[i].innerHTML == piezas[5]){
				posiciones = movimiento_peon(fila,columna, celda_rey);
			};
			for (var k = 0; k<posiciones.length; k++){
				pos_de_ataque.push(posiciones[k]);
			};
		};
		console.log(pos_de_ataque);
		for (var i=0; i<pos_rey.length; i++){
			var fila = pos_rey[i].substr(0,1);
			var columna = pos_rey[i].substr(1,2);
			if ((parseInt(fila)<9 && parseInt(fila)>0) && (parseInt(columna)<9 && parseInt(columna)>0)){
				var respuesta = colision(fila+columna, ocupadas, equipo);
				if (respuesta != "mismo equipo"){
						celdas_posibles.push(fila+columna);
					};
				if (respuesta != "no colisiona"){
					choca =true;
				};
			};
		};
		console.log("celdas antes de eliminar: "+celdas_posibles);
		for (var i = 0; i<pos_de_ataque.length; i++){
			for (var k = 0; k<celdas_posibles.length; k++){
				if (pos_de_ataque[i] == celdas_posibles[k]){
					celdas_posibles.splice(k,1);;
				};
			};
		};
		console.log("celdas despues de eliminar: "+celdas_posibles);
	}else{
		while (choca == false && fin_tablero == false){
			if (direccion == "abajo"){
				contador_fila++;
				if (contador_fila > 8){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila+columna, ocupadas, equipo, ataque_rey); 
					console.log(respuesta);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila+columna);
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "arriba"){
				contador_fila--;
				if (contador_fila < 1){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila+columna, ocupadas, equipo, ataque_rey);
					console.log(respuesta);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila+columna);
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "derecha"){
				contador_columna++;
				if (contador_columna > 8){
					fin_tablero = true;
				}else{
					var respuesta = colision(fila+contador_columna, ocupadas, equipo, ataque_rey);
					console.log(respuesta);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(fila+contador_columna);
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "izquierda"){
				contador_columna--;
				if (contador_columna < 1){
					fin_tablero = true;
				}else{
					var respuesta = colision(fila+contador_columna, ocupadas, equipo, ataque_rey);
					console.log(respuesta);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(fila+contador_columna);
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "arriba_derecha"){
				contador_fila--;
				contador_columna++;
				if (contador_columna > 8 || contador_fila < 1){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila.toString()+contador_columna.toString(), ocupadas, equipo);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila.toString()+contador_columna.toString());
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "abajo_derecha"){
				contador_fila++;
				contador_columna++;
				if (contador_columna > 8 || contador_fila > 8){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila.toString()+contador_columna.toString(), ocupadas, equipo);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila.toString()+contador_columna.toString());
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "abajo_izquierda"){
				contador_fila++;
				contador_columna--;
				if (contador_columna < 1 || contador_fila > 8){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila.toString()+contador_columna.toString(), ocupadas, equipo);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila.toString()+contador_columna.toString());
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			}else if (direccion == "arriba_izquierda"){
				contador_fila--;
				contador_columna--;
				if (contador_columna < 1 || contador_fila < 1){
					fin_tablero = true;
				}else{
					var respuesta = colision(contador_fila.toString()+contador_columna.toString(), ocupadas, equipo);
					if (respuesta != "mismo equipo"){
						celdas_posibles.push(contador_fila.toString()+contador_columna.toString());
					};
					if (respuesta != "no colisiona"){
						choca =true;
					};
				};
			};
		};		
	};
	
};

function movimiento_torre (fila, columna, ataque_rey){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("abajo", fila, columna, ocupadas, posibles, ataque_rey);
	celdas_posibles("arriba", fila, columna, ocupadas, posibles, ataque_rey);
	celdas_posibles("derecha", fila, columna, ocupadas, posibles, ataque_rey);
	celdas_posibles("izquierda", fila, columna, ocupadas, posibles, ataque_rey);
	console.log(posibles);
	return posibles;
};

function movimiento_alfil (fila, columna, ataque_rey){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("arriba_derecha", fila, columna, ocupadas, posibles);
	celdas_posibles("abajo_derecha", fila, columna, ocupadas, posibles);
	celdas_posibles("abajo_izquierda", fila, columna, ocupadas, posibles);
	celdas_posibles("arriba_izquierda", fila, columna, ocupadas, posibles);
	console.log(posibles);
	return posibles;
};

function movimiento_dama (fila, columna, ataque_rey){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("abajo", fila, columna, ocupadas, posibles);
	celdas_posibles("arriba", fila, columna, ocupadas, posibles);
	celdas_posibles("derecha", fila, columna, ocupadas, posibles);
	celdas_posibles("izquierda", fila, columna, ocupadas, posibles);
	celdas_posibles("arriba_derecha", fila, columna, ocupadas, posibles);
	celdas_posibles("abajo_derecha", fila, columna, ocupadas, posibles);
	celdas_posibles("abajo_izquierda", fila, columna, ocupadas, posibles);
	celdas_posibles("arriba_izquierda", fila, columna, ocupadas, posibles);
	console.log(posibles);
	return posibles;
};

function movimiento_caballo (fila, columna){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("caballo", fila, columna, ocupadas, posibles);
	console.log(posibles);
	return posibles;
};

function movimiento_peon (fila, columna){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("peon", fila, columna, ocupadas, posibles);
	console.log(posibles);
	return posibles;
};

function movimiento_rey (fila, columna){
	var ocupadas = localiza_piezas();
	var posibles = [];
	celdas_posibles("rey", fila, columna, ocupadas, posibles, true);
	console.log(posibles);
	return posibles;
}