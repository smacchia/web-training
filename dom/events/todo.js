var todos = document.querySelectorAll("li");

for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
    todos[i].addEventListener("mouseover", function() {
        this.classList.add("hover");
    });
    todos[i].addEventListener("mouseout", function() {
        this.classList.remove("hover");
    });
}