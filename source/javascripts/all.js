//= require_tree .

$(document).ready(function() {
  
  $(".fancybox")
    
    .fancybox({
      openEffect  : 'none',
      closeEffect : 'none',
      nextEffect  : 'none',
      prevEffect  : 'none',
      padding     : 0,
      margin      : [20, 60, 20, 60]
    });

  $('nav ul li a').click(function() {
    $('nav ul li').removeClass("active");
    $(this).addClass('active');
  });

});