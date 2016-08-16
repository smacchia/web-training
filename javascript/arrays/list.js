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
        var todo = prompt("Enter a new todo:");
        if (todo != null && todo != undefined) {
            todoList.push(todo);
        }
        console.log("ToDo: " + todo + " added.");
  } else if (cmd === list) {
        if (noItems(todoList)) continue;

        console.log("*********");
        // for (i = 0; i < len; i++) {
        //     console.log(i + ": " + todoList[i]);
        // }
        todoList.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        });

        console.log("*********");
    } else if (cmd == del) {
        if (noItems(todoList)) continue;

        do {
            indexToDelete = prompt("Enter the index of the ToDo you want to delete:");
        } while (indexToDelete != null && (indexToDelete < 0 || indexToDelete >= len));

        // User cancelled the delete.
        if (indexToDelete == null) continue;

        // Remove the item from the list
        gone = todoList.splice(indexToDelete, 1);
        console.log("ToDo: " + gone + " at position " +  indexToDelete + " deleted.");
    } else if (cmd == null) {
        break;
    }
}
console.log("You quit the app");

function noItems(todoList) {
    len = todoList.length;
    if (len <= 0) {
        console.log("No ToDo items in your list.");
    }

    return len <= 0;
}