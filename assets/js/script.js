$(document).ready(function(){
  var imgItems = $('.slidershow li').length; // Numero de Slides, imgs//
  var imgPos = 1;
  // Agregando iconos//
  for(i = 1; i <= imgItems; i++){
    $('.pagination').append('<li><i class="fa fa-circle" aria-hidden="true"></li>');
  }

	$('.slidershow li').hide(); // Ocultar todas las img del carrusel//
  $('.slidershow li:first').show(); //mostrar la primera imagen//
  $('.pagination li:first').css({'color': '#CD6E2E'}); //estilos al primer icono//

  // Ejecutar todas las funciones

  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  //funciones//
  function pagination(){
    var paginationPos = $(this).index() + 1; // Posicion del icono seleccionado//

  //estilo al icono seleccionado//
    $('.slidershow li').hide(); //ocultar todas las img//
    $('.slidershow li:nth-child('+ paginationPos +')').fadeIn(); // Mostrar la img seleccionada//
    
  //estilo al icono seleccionado//
    $('.pagination li').css({'color': '#858585'}); 
    $(this).css({'color': '#CD6E2E'});

    imgPos = paginationPos;
  }
  //funcion para pasar a la siguiente img//
  function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    } else {
      imgPos++;
    }
    $('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});
    $('.slidershow li').hide(); //esconder todas las img//
    $('.slidershow li:nth-child('+ imgPos +')').fadeIn(); //mostrar la img seleccionada//
  }

  //funcion para ver la img anterior//
  function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    $('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});
    $('.slidershow li').hide();
    $('.slidershow li:nth-child('+ imgPos +')').fadeIn();
  }
});