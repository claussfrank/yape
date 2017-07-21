var $telefono = $('#telefono');
var $acepta =$('#acepta');
var $botonSiguiente = $('#continuarRegistro');



var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$acepta.click(validar);
	$telefono.change(validar);
	$('#envio-tel').submit(agregarApi);
	//	$acepta.change(removerAtributo);
	

};

var validar = function(event) {
	event.preventDefault();

	var $valorTel = $telefono.val();
	console.log($valorTel.length);

	if ( $telefono.val().length === 10 && $acepta.is(":checked") ){

		removerAtributo();
		localStorage.setItem("telefono",$valorTel);

	}else {
		$botonSiguiente.attr("disabled", true);
	};

};

var removerAtributo = function (){
	console.log("ya casi");
	$botonSiguiente.removeAttr("disabled");
};

var agregarApi = function(event){
	event.preventDefault();
	
	$.post("http://localhost:3000/api/registerNumber", {
	
		"phone": $telefono.val(),
		"terms": true

	},function(respuesta){
		console.log(respuesta);
	});
}; 

var alerta = function(){
	alerta("Hola");
}



$(document).ready(cargarPagina);
