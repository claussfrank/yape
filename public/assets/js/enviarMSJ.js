var $telGuardado = localStorage.getItem("telefono");
var $imprimeTel = $('#numeroCliente');
var $botonSiguienteDato = $('#continuarRegistroDos');
var $numeroCode;
var $codeUsuario = $('#code');
console.log($numeroCode);
//codigo anterior 902315

var cargarPagina = function(){
	agregarApi();
	imprimeTel();
	$codeUsuario.change(validacion);
	
};

var  imprimeTel =function(){
	$imprimeTel.html($telGuardado);
}

var agregarApi = function(){

	$.post("http://localhost:3000/api/registerNumber", {

		"phone": $telGuardado,
		"terms": true

	},function(respuesta){
		$numeroCode = respuesta.data.code;
		
		localStorage.setItem("codigo",$numeroCode);
		
		alert(" tu número de confirmacion es " + $numeroCode );
//		validacion($numeroCode);
		return $numeroCode;
	});
}; 

	
var validacion =function($numeroCode,$codeUsuario){

		if ( $numeroCode === $codeUsuario.val() ){
			removerAtributo();
			console.log($codeUsuario.val());
		}else {
//			$botonSiguienteDato.attr("disabled", true);
			console.log("no pasa nada");
		};
};

var removerAtributo = function (){
	console.log("ya casi");
	$botonSiguienteDato.removeAttr("disabled");
};



$(document).ready(cargarPagina);
