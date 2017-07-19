var cargarPagina = function(){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
};
//$post('http://localhost:8080/api/registerNumber',{
//	"phone":"+51986161136",
//	"terms":true
//}).then(function(response){
//	console.log(response);
//}).catch(function(error){
//	console.log(error);
//})
$(document).ready(cargarPagina);