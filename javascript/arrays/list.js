var quit = "quit";
var add = "add";
var list = "list";

var cmd;
var todoList = [];

while (cmd !== quit) {
    cmd = prompt("What would you like to do?");
    if (cmd === add) {
        var todo = prompt("Enter a new todo:");
        if (todo != null && todo != undefined) {
            todoList.push(todo);
        }
    } else if (cmd === list) {
        console.log(todoList);
    } else if (cmd == null) {
        break;
    }
}
console.log("You quit the app");