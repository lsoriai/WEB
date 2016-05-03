var escenario = [{x:50,y:50,ancho:60,alto:50},
				 {x:50,y:150,ancho:60,alto:50},
				 {x:160,y:50,ancho:20,alto:150},
				 {x:230,y:50,ancho:60,alto:50},
				 {x:230,y:150,ancho:60,alto:50},
				 {x:340,y:50,ancho:20,alto:150},
				 {x:410,y:50,ancho:40,alto:150},
				 {x:50,y:250,ancho:20,alto:40},
				 {x:120,y:250,ancho:170,alto:40},
				 {x:340,y:250,ancho:110,alto:130},
				 {x:340,y:430,ancho:110,alto:20},
				 {x:120,y:340,ancho:170,alto:20},
				 {x:120,y:410,ancho:30,alto:40},
				 {x:200,y:410,ancho:90,alto:40},
				 {x:50,y:340,ancho:20,alto:110},
				 {x:0,y:0,ancho:500,alto:500}];
			 
var bolas = [{x:30,y:25},{x:40,y:25},{x:50,y:25},{x:60,y:25},{x:70,y:25},{x:80,y:25},{x:90,y:25},{x:100,y:25},{x:110,y:25},{x:120,y:25},
			 {x:130,y:25},{x:140,y:25},{x:150,y:25},{x:160,y:25},{x:170,y:25},{x:180,y:25},{x:190,y:25},{x:200,y:25},{x:210,y:25},{x:220,y:25},
			 {x:230,y:25},{x:240,y:25},{x:250,y:25},{x:260,y:25},{x:270,y:25},{x:280,y:25},{x:290,y:25},{x:300,y:25},{x:310,y:25},{x:320,y:25},
			 {x:330,y:25},{x:340,y:25},{x:350,y:25},{x:360,y:25},{x:370,y:25}, {x:380,y:25},{x:390,y:25},{x:400,y:25},{x:410,y:25},{x:420,y:25},
			 {x:430,y:25},{x:440,y:25},{x:450,y:25},{x:460,y:25},{x:470,y:25},{y:30,x:25},{y:30,x:25},{y:40,x:25},{y:50,x:25},{y:60,x:25},
			 {y:70,x:25},{y:80,x:25},{y:90,x:25},{y:100,x:25},{y:110,x:25},{y:120,x:25},{y:130,x:25},{y:140,x:25},{y:150,x:25},{y:160,x:25},
			 {y:170,x:25},{y:180,x:25},{y:190,x:25},{y:200,x:25},{y:210,x:25},{y:220,x:25},{y:230,x:25},{y:240,x:25},{y:250,x:25},{y:260,x:25},
			 {y:270,x:25},{y:280,x:25},{y:290,x:25},{y:300,x:25},{y:310,x:25},{y:320,x:25},{y:330,x:25},{y:340,x:25},{y:350,x:25},{y:360,x:25},
			 {y:370,x:25},{y:380,x:25},{y:390,x:25},{y:400,x:25},{y:410,x:25},{y:420,x:25},{y:430,x:25},{y:440,x:25},{y:450,x:25},{y:460,x:25},
			 {y:470,x:25},{x:30,y:475},{x:40,y:475},{x:50,y:475},{x:60,y:475},{x:70,y:475},{x:80,y:475},{x:90,y:475},{x:100,y:475},{x:110,y:475},
			 {x:120,y:475},{x:130,y:475},{x:140,y:475},{x:150,y:475},{x:160,y:475},{x:170,y:475},{x:180,y:475},{x:190,y:475},{x:200,y:475},
			 {x:210,y:475},{x:220,y:475},{x:230,y:475},{x:240,y:475},{x:250,y:475},{x:260,y:475},{x:270,y:475},{x:280,y:475},{x:290,y:475},
			 {x:300,y:475},{x:310,y:475},{x:320,y:475},{x:330,y:475},{x:340,y:475},{x:350,y:475},{x:360,y:475},{x:370,y:475},{x:380,y:475},
			 {x:390,y:475},{x:400,y:475},{x:410,y:475},{x:420,y:475},{x:430,y:475},{x:440,y:475},{x:450,y:475},{x:460,y:475},{x:470,y:475},
			 {y:30,x:475},{y:30,x:475},{y:40,x:475},{y:50,x:475},{y:60,x:475},{y:70,x:475},{y:80,x:475},{y:90,x:475},{y:100,x:475},{y:110,x:475},
			 {y:120,x:475},{y:130,x:475},{y:140,x:475},{y:150,x:475},{y:160,x:475},{y:170,x:475},{y:180,x:475},{y:190,x:475},{y:200,x:475},
			 {y:210,x:475},{y:220,x:475},{y:230,x:475},{y:240,x:475},{y:250,x:475},{y:260,x:475},{y:270,x:475},{y:280,x:475},{y:290,x:475},
			 {y:300,x:475},{y:310,x:475},{y:320,x:475},{y:330,x:475},{y:340,x:475},{y:350,x:475},{y:360,x:475},{y:370,x:475},{y:380,x:475},
			 {y:390,x:475},{y:400,x:475},{y:410,x:475},{y:420,x:475},{y:430,x:475},{y:440,x:475},{y:450,x:475},{y:460,x:475},{y:470,x:475},
			 {x:35,y:125},{x:45,y:125},{x:55,y:125},{x:65,y:125},{x:75,y:125},{x:85,y:125},{x:95,y:125},{x:105,y:125},{x:115,y:125},{x:125,y:125},
			 {x:215,y:125},{x:225,y:125},{x:235,y:125},{x:245,y:125},{x:255,y:125},{x:265,y:125},{x:275,y:125},{x:285,y:125},{x:295,y:125},
			 {x:305,y:125},{x:30,y:225},{x:40,y:225},{x:50,y:225},{x:60,y:225},{x:70,y:225},{x:80,y:225},{x:90,y:225},{x:100,y:225},{x:110,y:225},
			 {x:120,y:225},{x:130,y:225},{x:140,y:225},{x:150,y:225},{x:160,y:225},{x:170,y:225},{x:180,y:225},{x:190,y:225},{x:200,y:225},
			 {x:210,y:225},{x:220,y:225},{x:230,y:225},{x:240,y:225},{x:250,y:225},{x:260,y:225},{x:270,y:225},{x:280,y:225},{x:290,y:225},
			 {x:300,y:225},{x:310,y:225},{x:320,y:225},{x:330,y:225},{x:340,y:225},{x:350,y:225},{x:360,y:225},{x:370,y:225},{x:380,y:225},
			 {x:390,y:225},{x:400,y:225},{x:410,y:225},{x:420,y:225},{x:430,y:225},{x:440,y:225},{x:450,y:225},{x:460,y:225},{x:470,y:225},
			 {x:135,y:30},{x:135,y:40},{x:135,y:50},{x:135,y:60},{x:135,y:70},{x:135,y:80},{x:135,y:90},{x:135,y:100},{x:135,y:110},{x:135,y:120},
			 {x:135,y:130},{x:135,y:140},{x:135,y:150},{x:135,y:160},{x:135,y:170},{x:135,y:180},{x:135,y:190},{x:135,y:200},{x:135,y:210},
			 {x:135,y:220},{x:205,y:30},{x:205,y:40},{x:205,y:50},{x:205,y:60},{x:205,y:70},{x:205,y:80},{x:205,y:90},{x:205,y:100},{x:205,y:110},
			 {x:205,y:120},{x:205,y:130},{x:205,y:140},{x:205,y:150},{x:205,y:160},{x:205,y:170},{x:205,y:180},{x:205,y:190},{x:205,y:200},
			 {x:205,y:210},{x:205,y:220},{x:315,y:30},{x:315,y:40},{x:315,y:50},{x:315,y:60},{x:315,y:70},{x:315,y:80},{x:315,y:90},{x:315,y:100},
			 {x:315,y:110},{x:315,y:120},{x:315,y:130},{x:315,y:140},{x:315,y:150},{x:315,y:160},{x:315,y:170},{x:315,y:180},{x:315,y:190},
			 {x:315,y:200},{x:315,y:210},{x:315,y:220},{x:315,y:230},{x:315,y:240},{x:315,y:250},{x:315,y:260},{x:315,y:270},{x:315,y:280},
			 {x:315,y:290},{x:315,y:300},{x:315,y:310},{x:315,y:320},{x:315,y:330},{x:315,y:340},{x:315,y:350},{x:315,y:360},{x:315,y:370},
			 {x:315,y:380},{x:315,y:390},{x:315,y:400},{x:315,y:410},{x:315,y:420},{x:315,y:430},{x:315,y:440},{x:315,y:450},{x:315,y:460},
			 {x:315,y:470}, {x:385,y:30},{x:385,y:40},{x:385,y:50},{x:385,y:60},{x:385,y:70},{x:385,y:80},{x:385,y:90},{x:385,y:100},{x:385,y:110},
			 {x:385,y:120},{x:385,y:130},{x:385,y:140},{x:385,y:150},{x:385,y:160},{x:385,y:170},{x:385,y:180},{x:385,y:190},{x:385,y:200},
			 {x:385,y:210},{x:385,y:220},{x:95,y:230},{x:95,y:240},{x:95,y:250},{x:95,y:260},{x:95,y:270},{x:95,y:280},{x:95,y:290},{x:95,y:300},
			 {x:95,y:310},{x:95,y:320},{x:95,y:330},{x:95,y:340},{x:95,y:350},{x:95,y:360},{x:95,y:370},{x:95,y:380},{x:95,y:390},{x:95,y:400},
			 {x:95,y:410},{x:95,y:420},{x:95,y:430},{x:95,y:440},{x:95,y:450},{x:95,y:460},{x:95,y:470},{x:30,y:315},{x:40,y:315},{x:50,y:315},
			 {x:60,y:315},{x:70,y:315},{x:80,y:315},{x:90,y:315},{x:100,y:315},{x:110,y:315},{x:120,y:315},{x:130,y:315},{x:140,y:315},{x:150,y:315},
			 {x:160,y:315},{x:170,y:315},{x:180,y:315},{x:190,y:315},{x:200,y:315},{x:210,y:315},{x:220,y:315},{x:230,y:315},{x:240,y:315},
			 {x:250,y:315},{x:260,y:315},{x:270,y:315},{x:280,y:315},{x:290,y:315},{x:300,y:315},{x:310,y:315}, {x:100,y:385},{x:110,y:385},
			 {x:120,y:385},{x:130,y:385},{x:140,y:385},{x:150,y:385},{x:160,y:385},{x:170,y:385},{x:180,y:385},{x:190,y:385},{x:200,y:385},
			 {x:210,y:385},{x:220,y:385},{x:230,y:385},{x:240,y:385},{x:250,y:385},{x:260,y:385},{x:270,y:385},{x:280,y:385},{x:290,y:385},
			 {x:300,y:385},{x:310,y:385},{x:175,y:390},{x:175,y:400},{x:175,y:410},{x:175,y:420},{x:175,y:430},{x:175,y:440},{x:175,y:450},
			 {x:175,y:460},{x:175,y:470},{x:320,y:405},{x:330,y:405},{x:340,y:405},{x:350,y:405},{x:360,y:405},{x:370,y:405},{x:380,y:405},
			 {x:390,y:405},{x:400,y:405},{x:410,y:405},{x:420,y:405},{x:430,y:405},{x:440,y:405},{x:450,y:405},{x:460,y:405},{x:470,y:405}];
			 
var pacman;
var pos_x = 25;
var pos_y = 25;
color_pacman = "yellow";
var AreaJuego = {
    start : function(w, h, id) {
    	this.id = id;
    	this.canvas = document.getElementById(this.id);
        this.canvas.width = w;
        this.canvas.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
	},
	dibujar_bolas: function(bolas) {
		this.context.strokeStyle = "#f3f3f3";
		for (var j = 0; j < bolas.length; j++){
			var x = bolas[j].x;
			var y = bolas[j].y;
			this.context.strokeRect(x,y,2,2);	
		}
	},
	dibujar_paredes:  function() {
		for (var i = 0; i < escenario.length; i++){
		var x = escenario[i].x;
		var y = escenario[i].y;
		var ancho = escenario[i].ancho;
		var alto = escenario[i].alto;
		this.context.strokeStyle = "#0000ff";
		this.context.lineWidth = 2;
		this.context.strokeRect(x, y, ancho, alto);
		}
	},
	borrar: function() {
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
	}
}

function dibujar_pacman (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    ctx = AreaJuego.context;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, 23, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

/*Procedimiento principal*/
function startGame(){
	AreaJuego.start(500,500,"principal");
	AreaJuego.dibujar_bolas(bolas);
	AreaJuego.dibujar_paredes();
	pacman = new dibujar_pacman(pos_x,pos_y,color_pacman);

	/*Si se pulsa una tecla se mueve el pacman, establecemos un evento*/
		window.addEventListener('keydown',
		 function tecla_movimiento(evento){
		 	aux_pos_x = pos_x;
		 	aux_pos_y = pos_y;
			switch (evento.keyCode){
			/*derecha*/
			case 39:
				pos_x = pos_x + 5;
				break;
				
			/*izquierda*/
			case 37:
				pos_x = pos_x - 5;
				break;
				
			/*abajo*/
			case 40:
				pos_y = pos_y + 5;
				break;
				
			/*arriba*/
			case 38:
				pos_y = pos_y - 5;
				break;
				
			default:
				break;
			}
			
			 /*Comprobar si no a cochado con una pared*/
			var choca = colision(escenario, pos_x, pos_y);
			
			if(choca == false){
			/*Pintamos de nuevo el escenario y la nueva posicion del pacman*/
				AreaJuego.start(500,500,"principal");
				AreaJuego.dibujar_bolas(bolas);
				AreaJuego.dibujar_paredes();
				pacman = new dibujar_pacman(pos_x,pos_y,color_pacman);
			}else{
				pos_x = aux_pos_x;
				pos_y = aux_pos_y;
			}
				
		});

		/*Pintamos los Pacmans de colores para el DRAG and DROP*/
		AreaJuego.start(54,54,"red");
		pacman_rojo = new dibujar_pacman(27,27,"red");
		AreaJuego.start(54,54,"pink");
		pacman_rosa = new dibujar_pacman(27,27,"pink");
		AreaJuego.start(54,54,"orange");
		pacman_naranja = new dibujar_pacman(27,27,"orange");

		
}
function colision (escenario, pos_x, pos_y){
	choca = false;
	i = 0;
	while (choca == false && i<escenario.length){
		var escenario_x_izq = escenario[i].x;
		var escenario_y_super = escenario[i].y;
		var escenario_x_drch = escenario[i].ancho + escenario_x_izq;
		var escenario_y_infer = escenario[i].alto + escenario_y_super;
		var pos_x_izq = pos_x - 23;
		var pos_x_drch = pos_x + 23;
		var pos_y_super = pos_y - 23;
		var pos_y_infer = pos_y + 23;
		
		if(escenario_x_izq==0){
			if(((pos_x_izq>=2)&&(pos_x_drch<=498))&&((pos_y_super>=2)&&(pos_y_infer<=498))){
				choca = false;
			}else{
				choca = true;
			}
		}else{
			if((pos_x_drch<escenario_x_izq)||(escenario_x_drch<pos_x_izq)){
				choca = false;
			}else if((pos_y_infer<escenario_y_super)||(escenario_y_infer<pos_y_super)){
				choca = false;
			}else{
				choca = true;
			}
		}
		i = i + 1;
	 }
	 return choca;
}

/*----------------------------------------------------------------------------------------*/
		/*DRAG AND DROP*/

		/*Primero pintamos los posibles comecocos que pueden ser elegidos para ello
		creamos sus canvas*/
		function drag(ev){
			ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev){
			ev.preventDefault();
			var id = ev.dataTransfer.getData("text");
			ev.target.appendChild(document.getElementById(id));
			dibujar_pacman_DragDrop(id);
		}

		function allowDrop(ev){
			ev.preventDefault();
		}

		function dibujar_pacman_DragDrop(color){
			AreaJuego.start(500,500,"principal");
			AreaJuego.dibujar_bolas(bolas);
			AreaJuego.dibujar_paredes();
			alert(color);
			pacman = new dibujar_pacman(pos_x,pos_y,color);
			color_pacman=color;

		}


