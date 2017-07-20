var $telefono = $('#telefono');
var $acepta =$('#acepta');
var $botonSiguiente = $('#continuarRegistro');



var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$acepta.click(validar);
	$telefono.change(validar);
	//	$acepta.change(removerAtributo);

};

var validar = function(event) {
	event.preventDefault();

	var $valorTel = $telefono.val();
	console.log($valorTel.length);

	if ( $telefono.val().length === 10 && $acepta.is(":checked") ){

		removerAtributo();

	}else {
		$botonSiguiente.attr("disabled", true);
	};

};

var removerAtributo = function (){
	console.log("ya casi");
	$botonSiguiente.removeAttr("disabled");
};

$.post("http://localhost:3000/api/registerNumber", {
	
		"phone": $telefono.val(),
		"terms": true

	}).then(function(respuesta){
		console.log(respuesta);
	}).catch(function(error){
		console.log(error);
	})


$(document).ready(cargarPagina);
