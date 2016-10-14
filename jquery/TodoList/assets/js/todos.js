
// Check off specific todo items by clicking
// Can only add a listener to elements that exist at the same time, and not all
// li elements exist; so add to the ul parent. The 2nd argument says that when an
// li is clicked inside a ul.
$("ul").on("click", "li", function() {
    // Too much work
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");

    // Too much work
    // if ($(this).css("color") == "rgb(128, 128, 128)") {
    //     $(this).css({
    //         textDecoration: "none",
    //         color: "black"
    //     });
    // } else {
    //     $(this).css({
    //         textDecoration: "line-through",
    //         color: "gray"
    //     });
    // }
    $(this).toggleClass("completed");
});

// Delete a todo item
$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
});

// Add a new todo item
$("input[type='text']").keypress(function(event) {
    if (event.which !== 13) return;
    // grab the text from the input
    var text = $(this).val();
    // create a new li and add to the ul
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + text + "</li>");
    // clear out the input
    $(this).val("");
});

// Fade in/out the add icon
$(".fa-plus").click(function() {
    $("input[type='text'").fadeToggle();
})