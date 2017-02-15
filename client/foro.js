Meteor.subscribe('entradas');
Meteor.subscribe('comentarios');
Template.foro_entradas.events({
	"submit #form-foro": function(event, template){
		console.log(template.find('#comentario_foro').value);
		var entrada = "";
		if(Comentarios.find({id_entrada: this._id}).count() == 0){
			var entrada={
				user_id: Meteor.user().username,
				title: template.find('#entrada_foro').value,
				num_comentarios: 1
			}
		}else{
			var entrada={
				user_id: Meteor.user().username,
				title: template.find('#entrada_foro').value,
				num_comentarios: Comentarios.find({id_entrada: this._id}).count()
			}
		};
		console.log(entrada);
		Entradas.insert(entrada);

		var comentario ={
			user_id: Meteor.user().username,
			id_entrada: Entradas.findOne({title: template.find('#entrada_foro').value})._id,
			texto: template.find('#comentario_foro').value,
			tema: template.find('#entrada_foro').value, 
		}
		console.log(comentario);
		Comentarios.insert(comentario);
	}
});

Template.foro_comentarios.events({
	"submit #form-comentario": function(event, template){
		console.log(template.find('#nuevo_comentario').value);
		var comentario ={
			user_id: Meteor.user().username,
			id_entrada: this._id,
			texto: template.find('#comentario_foro').value,
			tema: template.find('#entrada_foro').value, 
		}
		console.log(comentario);
		Comentarios.insert(comentario);
	}
});