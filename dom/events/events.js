var numClicks = 0;
document.querySelector("button").addEventListener("click", function() {
    document.querySelector("p").textContent = "Someone clicked me " +  numClicks++ + " times";
})