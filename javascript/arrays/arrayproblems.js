// Array problem set

printReverse([1, 2, 3, 4, 5]);
printReverse(["a", "b", "c"]);
printReverse([]);

console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "c"]));
console.log(isUniform(["b", "b", "b"]));
console.log(isUniform([]));
console.log(isUniform([1]));

console.log(sumArray([1,2,3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));
console.log(sumArray([]));
console.log(sumArray([1, 2, "a"]));

function printReverse(array) {
    len = array.length;
    if (len <= 0) {
        console.log("printReverse: Empty array");
        return;
    }

    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    len = array.length;
    if (len <= 0)  {
        console.log("isUniform: Empty array");
        return;
    } 

    console.log(array);
    if (len == 1) {
        return true;
    }
    var first = array[0];

    for (i = 1; i < len; i++) {
        if (array[i] !== first) return false;
    }

    return true;
}

function sumArray(array) {
     if (array.length <= 0)  {
        console.log("sumArray: Empty array");
        return 0;
    } 
   
    console.log(array);
    var sum = 0;
    array.forEach(function(num) {
        if (isNaN(num)) {
            console.log(num + " is not a number!");
        } else {
            sum += num;
        }
    });

    return sum;
}