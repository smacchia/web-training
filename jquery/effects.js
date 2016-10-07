// FADING

// $('button').click(function() {
//     // display must not be 'none' for this to work
//     $('div').fadeOut(800, function() {
//         // $(this).remove();
//         console.log("fade completed");
//     });
// });
// $('button').click(function() {
//     $('div').fadeIn(800, function() {
//         // $(this).remove();
//         console.log("fade completed");
//     });
// });
// $('button').click(function() {
//     $('div').fadeToggle(800, function() {
//         // $(this).remove();
//         console.log("fade completed");
//     });
// });

//SLIDING
// $('button').click(function() {
//     $('div').slideDown(function() {
//         // $(this).remove();
//         console.log("slide completed");
//     });
// });
// $('button').click(function() {
//     // display must not be 'none' for this to work
//     $('div').slideUp(function() {
//         // $(this).remove();
//         console.log("slide completed");
//     });
// });
$('button').click(function() {
    // display must not be 'none' for this to work
    $('div').slideToggle(800, function() {
        // $(this).remove();
        console.log("slide completed");
    });
});
