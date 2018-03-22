$(document).ready(function(){

//   $("h1").click(function(){
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
// });

$(".clickable").click(function(){
  $(".walrus-showing").toggle();
  $(".walrus-hidden").toggle();
});

// $("h1").click(function(){
//   $(".walrus-showing").show();
// }

$("p").click(function(){
  alert("This is a paragraph.");
});

$("img").click(function(){
  alert("This is an image.");
});

});
