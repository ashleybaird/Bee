jQuery(document).ready(function(){

$("#log").click(function() {
  console.log("working")
  $(".audio-play")[0].currentTime = 0;
  $(".audio-play")[0].play();
  $("body").fadeOut("slow", function(){

  });
});



})