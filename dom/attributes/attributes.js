var link = document.querySelector("a");
if (link != null) {
    console.log("initial href before change: " + link.getAttribute("href"));

    link.setAttribute("href", "http://www.sbmgarden.com");
    console.log("initial href after change: " + link.getAttribute("href"));
    link.textContent = "Link to my website";
}

var img = document.querySelector("img");
if (img != null) {
    img.setAttribute("src", "me.jpg");
}
