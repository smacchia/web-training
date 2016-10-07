$('h1').click(function() {
    console.log("Header clicked!");
});

// $('button').click(function() {
//     // Need to use jQuery version of 'this'
//     $(this).css("background", "red");
//     $(this).css("color", "white");
//     console.log($(this).text() + " was clicked");
// });

// $('#warn').click(function() {
//     alert("I said, DON'T CLICK!");
// });

// $('input').keypress(function(event) {
//     if (event.which == 13) {
//         console.log("hit enter");
//     }
// });

// OR
$('button').on("click", function() {
    // Need to use jQuery version of 'this'
    $(this).css("background", "red");
    $(this).css("color", "white");
    console.log($(this).text() + " was clicked");
});

$('input[type="text"').on("keypress", function(event) {
    if (event.which == 13) {
        console.log("hit enter");
    }
})

// Could do this with CSS
$('button').on("mouseenter", function() {
    $(this).css("font-weight", "bold");
})


$('button').on("mouseleave", function() {
    $(this).css("font-weight", "normal");
})