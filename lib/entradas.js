Entradas = new Mongo.Collection('entradas');

EntradasSchema = new SimpleSchema({
	user_id:{
		type:String,
		label:"autor"
	},
	title:{
		type:String,
		label:"titulo",
		max:255
	},
	num_comentarios:{
		type:Number,
		optional:true
	}
});


Entradas.attachSchema(EntradasSchema);

Entradas.after.remove(function(user_id, doc){
	Comentarios.remove({entrada_id:doc._id});
});