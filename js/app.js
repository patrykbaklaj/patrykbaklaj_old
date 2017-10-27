$(document).ready(function() {

  // for setting image size while resizing
  setWindowHeight();
  $(window).on("load resize", function () {
    setWindowHeight();
  });

  // for animation purpose
  $("body").fadeIn('fast', animateH1);




// scrollspy for navbar
  $('body, html').scrollspy({
    target: '#navbar',
    offset: 150
  });


// scrolling effects for menu
  $('nav a, #to-top').bind('click', function() {
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 1400, 'easeInExpo');
    event.preventDefault();
  })

  // scrolling effects for arrow
  $('.arrow').bind('click', function() {
    $('html, body').stop().animate({
      scrollTop: $('#about').offset().top - 50
    }, 1000, 'easeInExpo');
    event.preventDefault();
  })


  function setWindowHeight() {
    $(".fill-screen").css("height", window.innerHeight);
  }


  // first section animation
  function animateH1 (){
    $(".hello-text").delay(600)
    .fadeIn("slow")
    .delay(1500)
    .fadeOut("400", function(){
      $(this).text("Want to know me?");
    })
    .fadeIn()
    .delay(1500)
    .fadeOut("400", function(){
      $('.welcome').addClass('background-welcome parallax');
      // $(this).html("<a href='#'>Let's get started!</a>");
      $(this).text("Let's get started!");
      $(this).addClass("hello-text-after")
    })
    .fadeIn("400", showArrow);
  };

  function showArrow(){
    $(".arrow, #navbar").fadeIn("600");
  }

});
