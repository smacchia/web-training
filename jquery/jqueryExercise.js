// Select all divs and give them a purple background
$("div").css("background", "purple");
// select the divs w/ class 'highlight' and make them 200px in width
$(".highlight").css("width", "200px");
// select the 3rd dif and give it an orange border
$("#third").css("border", "orange solid 1px");
// bonus - select the first dive only and change the text color to pink
$("div:first").css("color", "pink"); // slower than first-of-type
$("div:first-of-type").css("color", "orange");