/*Para la lanzar las ventanas modales en caso de solicitarla (¿Ya tienes cuenta?)*/
Modal.allowMultiple=true;

/*nos creamos una variable global validada*/
var validador = $.validator;

validador.setDefaults({
	rules:{
		regusuario:{
			required:true,
			minlength:4,
			maxlength:20,
		},
		regemail:{
			required:true,
			email:true,
		},
		regcontraseña1:{
			required:true,
			minlength:6,
		},
		regcontraseña2:{
			required:true,
			minlength:6,
			equalTo:"#regcontraseña1",
		}
	},
	messages:{
		regusuario:{
			required:"Debes de introducir un nombre o login",
			minlength:"Ha de superar los 4 caracteres",
			maxlength:"No puede superar los 20 caracteres",
		},
		regemail:{
			required:"Debes de introducir un email",
			email:"Email incorrecto",
		},
		regcontraseña1:{
			required:"Debes de introducir una contraseña",
			minlength:"Ha de superar los 6 caracteres",
		},
		regcontraseña2:{
			required:"Debes de introducir una contraseña",
			minlength:"Ha de superar los 6 caracteres",
			equalTo:"Ambas contraseñas deben ser iguales",
		}
	}
});

/*Funcion que comprueba si se cumple todas las validaciones del formulario registro*/
Template.registro.onRendered(function(){
	validator=$('#form-registro').validate();
});

/*Funcion que comprueba si se cumple todas las validaciones del formulario inciar sesion*/
Template.login.onRendered(function(){
	validator=$('#form-login').validate();
});

/*Funciones que cambian, a través del evento onclick, la ventana modal que muestra en contenido*/
Template.registro.events({
	"click a#login":function(event, template){
		event.preventDefault();
		/*Primero cerramos la ventana desde la que llamamos*/
		Modal.hide(template);
		/*Abrimos la que solicitamos*/
		Modal.show('login');
	},
	/*Cuando pulsamos el submit del formulario registramos al usuario*/
	/*Primero guardamos en variables los campos del formulario*/
	/*Para ellos buscamos en la template los id's de cada uno de los campos*/
	"submit #form-registro": function(event, template){
		var nombre = template.find('#regusuario').value;
		var email = template.find('#regemail').value;
		var pswd1 = template.find('#regcontraseña1').value;
		var pswd2 = template.find('#regcontraseña2').value;

		console.log("datos del formulario: "+nombre+' '+email+' '+pswd1+' '+pswd2);
		/*Nos creamos el objeto para la base de datos*/
		var userObject={
			username: nombre,
			email: email,
			password: pswd1
		};
		console.log(userObject);
		Accounts.createUser(userObject, function(error){
			if(error){
				alert(error);
				console.log(Meteor.user());
				//Pueden existir varios errores, que exista el nombre de usuario o que exista ya el mail
				if(error.reason == "Username already exists."){
					validator.showErrors({
						regusuario: "Ya existe un usuario con ese login"
					});
				};
				if(error.reason == "Email already exists."){
					validator.showErrors({
						regemail: "Este email ya está registardo"
					});
				};
			}else{
				//Enrutamos al usuario a su contenido
				//cerramos la ventana modal
				Modal.hide('template');
			};
		});
		console.log("datos del formulario: "+nombre+' '+email+' '+pswd1+' '+pswd2);
		return false;
	}
});

Template.login.events({
	"click a#registro": function(event, template){
	event.preventDefault();
		/*Primero cerramos la ventana desde la que llamamos*/
		Modal.hide(template);
		/*Abrimos la que solicitamos*/
		Modal.show('registro');	
	},
	"submit #form-login": function(event, template){
		//Recogemos en variables los datos que introduce el usuario
		var nombre = template.find('#logusuario').value;
		var pswd = template.find('#logcontraseña').value;
		Meteor.loginWithPassword(nombre, pswd, function(error){
			if(error){
				if(error.reason == "User not found"){
					validator.showErrors({
						logusuario: "Este usuario no existe"
					});
				};
				if(error.reason == "Incorrect password"){
					validator.showErrors({
						logcontraseña: "Contraseña incorrecta"
					});
				}
			}else{
				//Llamamos a router para mostrar el contenido de ese usuario
				console.log(Meteor.user());
				Modal.hide(template);
			}
		});
		return false;
	}
});

//Cuando le damos a enviar formulario (cerrar sesion)

Template.cerrarSesion.events({
	"submit #form-logout": function(event, template){
		Meteor.logout(function(error){
			console.log(error.reason);
		});
	}	
});



