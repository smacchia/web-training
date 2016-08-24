var tag = document.querySelector("h1");
//h1.style.border="5px solid green"
tag.classList.add("highlight-header");
// var para = document.querySelector("p");
// para.classList.add("big");

var para = document.getElementsByTagName("p")[0]; // just for a change from querySelector;
console.log(para)
console.log(para.textContent);
console.log(para.innerHTML);

var ul = document.querySelector("ul"); 
console.log(ul)
console.log(ul.textContent);
console.log(ul.innerHTML);