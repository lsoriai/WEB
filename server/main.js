Meteor.publish('entradas', function(){
	return Entradas.find();
});

Meteor.publish('comentarios', function(){
	return Comentarios.find();
});