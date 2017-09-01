$(function(){
  // nav
  $("#nav-home").addClass("active");
  //Click event
  var mainPos = $("#main").position();
  var aboutPos = $("#about").position();
  var contactPos = $("#contact").position();
  $(window).resize(function() {
    mainPos = $("#main").position();
    aboutPos = $("#about").position();
    contactPos = $("#contact").position();
  });
  $(".navButton").click(function(){
    var id = $(this).attr("id");
    if(id == "nav-contact"){
      $('html, body').animate({'scrollTop': contactPos.top},1000, 'swing');
      }
    else if(id == "nav-about"){
      $('html, body').animate({'scrollTop': aboutPos.top},1000, 'swing');
    }
    else if(id == "nav-home"){
      $('html, body').animate({'scrollTop': mainPos.top},1000, 'swing');
    }
    });
//Scroll event
    $(window).scroll(function(){
       var x = $(this).scrollTop();
       if(x >= 0 && x < aboutPos.top){
         $(".active").removeClass("active");
         $("#nav-home").addClass("active");
       }
        if (x >= aboutPos.top && x < contactPos.top-200) {
         $(".active").removeClass("active");
         $("#nav-about").addClass("active");
       }
       else if (x >= contactPos.top-200) {
         $(".active").removeClass("active");
         $("#nav-contact").addClass("active");
       }
     });
});
