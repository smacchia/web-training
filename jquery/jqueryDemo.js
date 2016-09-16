$('#clickme').click(function() {
	$('body').css("background", "yellow");
	$('img').fadeOut(3000, function() {
		$(this).remove();
	})
})