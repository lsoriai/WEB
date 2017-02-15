Template.topBar.events({
	"click a#registro":function(event, template){
		event.preventDefault();
		Modal.show('registro');
	},
	"click a#login":function(event, template){
		event.preventDefault();
		Modal.show('login');
	},
	"click a#logout":function(event, template){
		event.preventDefault();
		Modal.show('cerrarSesion');
	}
});

Template.foro_entradas.helpers({
	entradas:function(){
		return Entradas.find({});
	},
});