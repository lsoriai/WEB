Comentarios = new Mongo.Collection('comentarios');

Comentarios.allow({
	insert:function(){
		return true;
	}
})

ComentariosSchema = new SimpleSchema({
	user_id:{
		type:String,
		label:"autor",
	},
	id_entrada:{
		type:String,
		label:"identificador_entrada",
	},
	texto:{
		type:String,
		label:"texto",
	},
	tema:{
		type:String,
		label:"texto",
	}
});

Comentarios.attachSchema(ComentariosSchema);

Comentarios.after.insert(function(user_id,doc){
	Entradas.update({_id:doc.id_entrada}, {$inc:{num_comentarios:1}}, function(error,result){
		if(error){
			console.log('error update entradas: '+error);
		};
	});
});

Comentarios.after.remove(function(user_id,doc){
	Entradas.update({_id:doc.id_entrada}, {$inc:{num_comentarios:-1}}, function(error,result){
		if(error){
			console.log('error update entradas: '+error);
		};
	});
});