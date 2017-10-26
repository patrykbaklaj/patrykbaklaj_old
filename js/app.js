$(document).ready(function() {

  setWindowHeight();

  $("body").fadeIn('fast', animateH1);


  $(window).on("load resize", function () {
    setWindowHeight();
  });

  $(".arrow img").click(function() {
    scrollDown();
  });


  // $('body, html').scrollspy({
  //   target: '#navbar',
  //   offset: 150
  // })
  //
  // $('nav a, #to-top').bind('click', function() {
  //   $('html, body').stop().animate({
  //     scrollTop: $($(this).attr('href')).offset().top - 50
  //   }, 1400, 'easeInExpo');
  //   event.preventDefault();
  // })
  //
  // $('.carousel a.btn-primary').bind('click', function() {
  //   $('html, body').stop().animate({
  //     scrollTop: $('#services').offset().top - 50
  //   }, 1200, 'easeInExpo');
  //   event.preventDefault();
  // })


  function setWindowHeight() {
    $(".fill-screen").css("height", window.innerHeight);
  }

  //
  //

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
    $(".arrow").fadeIn();
  }
  //
  function scrollDown(){
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 800);

  }
  //
});
