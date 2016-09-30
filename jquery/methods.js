var img1 = "2008-06-11 02.00.00.jpg";
var img2 = "2008-08-30 07.57.11.JPG";

$("#flip").click(function() {
	var img = $("img");
	var newimg;
	if (img.attr("src") == img1) {
		newimg = img2
	} else {
		newimg = img1
	}
	img.attr("src", newimg);
});

$("select").click(function() {
	$("input").val($("select").val());
});

$("h1").text("jQuery Methods Demo");
console.log($('li').text());
console.log($("ul").text());
console.log($("ul").html());
$('img').css("width", "20%");

$("img:first-of-type").attr("src", img2);
$("img").last().attr("src", img2);

console.log($("input").val());
console.log($("select").val());

