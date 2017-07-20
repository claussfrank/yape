var $telefono = $('#telefono');
var $acepta =$('#acepta');
var $siguiente = $('#continuarRegistro');




var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('#envio-tel').submit(cargarApi);
	validar(cargarApi)
//	$acepta.click(validar);
};



var api ={
	url:'http://localhost:3000/api/registerNumber'
};


var validar = function() {
	var $valorTel = $telefono.val();
	console.log($valorTel.length);
//
//	if($telefono.val().length === 10 && ){
//	   
////		removerAtributo();
//	}else {
//			$siguiente.attr("disabled", true);
//		};
};

var removerAtributo = function (){
	$siguiente.removeAttr("disabled");
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
