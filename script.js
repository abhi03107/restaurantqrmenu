$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
  if ($('.toggle').hasClass('toggle-on')){
  	$('.non').addClass('non-veg');
  }else{
  	$('.non').removeClass('non-veg');
  }
});


