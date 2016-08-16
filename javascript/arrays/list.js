var quit = "quit";
var add = "new";
var list = "list";
var del ="delete";

var cmd;
// Seed for easier debugging of delete.
var todoList = ["Learn", "Teach", "Clean"];

while (cmd !== quit) {
    len = todoList.length;
    cmd = prompt("What would you like to do?");
    if (cmd === add) {
        addTodo();
    } else if (cmd === list) {
       listTodos();
    } else if (cmd == del) {
        removeTodo();
    } else if (cmd == null) {
        break;
    }
}
console.log("You quit the app");

function addTodo() {
    var todo = prompt("Enter a new todo:");
    if (todo != null && todo != undefined) {
        todoList.push(todo);
    }
    console.log("ToDo: " + todo + " added.");
}

function removeTodo() {
    if (noItems(todoList)) return;

    do {
        indexToDelete = prompt("Enter the index of the ToDo you want to delete:");
    } while (indexToDelete != null && (indexToDelete < 0 || indexToDelete >= todoList.length));

    // User cancelled the delete.
    if (indexToDelete == null) return;

    // Remove the item from the list
    gone = todoList.splice(indexToDelete, 1);
    console.log("ToDo: " + gone + " at position " +  indexToDelete + " deleted.");
}

function listTodos() {
    if (noItems(todoList)) return;

    console.log("*********");

    todoList.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });

    console.log("*********");
}

function noItems(todoList) {
    len = todoList.length;
    if (len <= 0) {
        console.log("No ToDo items in your list.");
    }

    return len <= 0;
}
