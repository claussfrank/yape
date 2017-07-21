var $telGuardado = localStorage.getItem("telefono");//entra el  telefono de  la  pagina anterior
var $imprimeTel = $('#numeroCliente');//espacio  donde se va imprimir el  telefono
var $botonSiguienteDato = $('#continuarRegistroDos');//botton de siguien
var $numeroCode =localStorage.getItem("codigo");//guardamos el numero de codigo
var $codeUsuario = $('#code');//el codigo que ingres el usuario

console.log($numeroCode);
//codigo anterior 933868

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
		
		$numeroCode = respuesta.data.code
		localStorage.setItem("codigo",$numeroCode);
		
//		validacion();
//		
	});
}; 

		alert(" tu número de confirmacion es " + $numeroCode );
	
var validacion =function(){

		if ( $numeroCode == $codeUsuario.val() ){
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
