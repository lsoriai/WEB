Router.route('/', {name: 'principal'});

Router.route('/foro_comentarios/:_id', function(){
	var db_comentarios = Comentarios.find({id_entrada: this.params._id})

	if(!db_comentarios){
		console.log("no existe")
		Router.go('principal')
	}else{
		this.render('foro_comentarios',{
			data:{comentarios:db_comentarios}
		})
	}
},{
	name: 'foro_comentarios'
})
