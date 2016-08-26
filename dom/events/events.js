var numClicks = 0;
document.querySelector("button").addEventListener("click", function() {
    document.querySelector("p").textContent = "Someone clicked me " +  numClicks++ + " times";
    // document.querySelector("body").classList.toggle("full-color");
    document.body.classList.toggle("full-color");
})