var cargarPagina = function(){
	console.log("hola");
};


var cargarApi = function(event){
	event.preventDefault();
	
	var $valorTel = $telefono.val();

	console.log($valorTel);
		$.post(api.url,{
			"phone":$valorTel,
			"terms":true

		}).then(function(response){
			console.log(response);

		}).catch(function(error){
			console.log(error);
		});
};

$(document).ready(cargarPagina);