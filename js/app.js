$(document).ready(function() {


  $("body").fadeIn('slow', animateH1);
  $(".arrow img").click(function() {
    scrollDown();
  });


  // first section animation
  function animateH1 (){
    $(".welcome h1").delay(500)
    .css("margin-top", "20%")
    .fadeIn("slow")
    .delay(1500)
    .fadeOut("400", function(){
      $(this).text("Want to know me?");
    })
    .fadeIn()
    .delay(1500)
    .fadeOut("400", function(){
      $('.welcome').addClass('background_welcome parallax');
      // $(this).html("<a href='#'>Let's get started!</a>");
      $(this).html("<span>Let's get started!</span>");
      $(this).css({
        "background": "black",
        "opacity": "0.7",
        "width": "100%"
      })
    })
    .fadeIn("fast")
    .animate({
      fontSize: "4em",
      fontWeight: "bold",
      padding: "1em"
    }, 100, showArrow)
  };

  function showArrow(){
    $(".arrow").fadeIn();
  }

  function scrollDown(){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 800);

  }

});
