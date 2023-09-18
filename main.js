// Hamburger Menu
$('.hamburger-button').click(function(){
  $('.mobile-menu').fadeToggle(400);
  $(this).toggleClass('active');
});