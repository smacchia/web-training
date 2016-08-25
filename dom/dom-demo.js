var tag = document.querySelector("h1");
//h1.style.border="5px solid green"
tag.classList.add("highlight-header");
// var para = document.querySelector("p");
// para.classList.add("big");

// There can be more than one listener, here we have one. We can chain 
// them and if we don't want that we have to remove it with removeEventListener
// tag.addEventListener("click", function() {
//     alert("h1 clicked")
// })

var para = document.getElementsByTagName("p")[0]; // just for a change from querySelector;
console.log(para)
console.log(para.textContent);
console.log(para.innerHTML);

var ul = document.querySelector("ul"); 
console.log(ul)
console.log(ul.textContent);
console.log(ul.innerHTML);

// looping is very common. 
// Can declare a named function separately if that makes sense.
var liTags = document.querySelectorAll("li");
for (var i = 0; i < liTags.length; i++ ) {
    liTags[i].addEventListener("click", function() {
        this.classList.toggle("crossed-out")
    });
}
