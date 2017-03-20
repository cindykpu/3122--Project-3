$(".switch").click (function(){
  $(".shoe-box").fadeIn();
  $(".color-shoe-box").fadeOut();
  $(".shoe-two").fadeOut();
  $(".shoe-three").fadeOut();
  $(".shoe-four").fadeOut();
});

$(".switch-two").click (function(){
  $(".shoe-box").fadeOut();
  $(".color-shoe-box").fadeIn();
  $(".shoe-two").fadeOut();
  $(".shoe-three").fadeOut();
  $(".shoe-four").fadeOut();
});

$(".switch-three").click (function(){
  $(".shoe-box").fadeOut();
  $(".color-shoe-box").fadeOut();
  $(".shoe-two").fadeIn();
  $(".shoe-three").fadeOut();
  $(".shoe-four").fadeOut();
});

$(".switch-four").click (function(){
  $(".shoe-box").fadeOut();
  $(".color-shoe-box").fadeOut();
  $(".shoe-two").fadeOut();
  $(".shoe-three").fadeIn();
  $(".shoe-four").fadeOut();
});

$(".switch-five").click (function(){
  $(".shoe-box").fadeOut();
  $(".color-shoe-box").fadeOut();
  $(".shoe-two").fadeOut();
  $(".shoe-three").fadeOut();
  $(".shoe-four").fadeIn();
});
