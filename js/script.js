$(function(){
  $('.nav-item').click(function(){
      $('.nav-item.active').removeClass('active');
      $(this).addClass('active');
  });
});

$(".navbar-nav a").click(function(event) {
  if (!$(this).parent().hasClass('dropdown'))
      $(".navbar-collapse").collapse('hide');
});