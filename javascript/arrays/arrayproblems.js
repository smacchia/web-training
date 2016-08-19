// Array problem set

// After testing, I realized that the prototypes MUST be at the
// top before any other code in a .js file.
Array.prototype.myForEach =
    function (func) {
        for (var i = 0; i < this.length; i++ ) {
            func(this[i]);
        }
    }
// function foreach(array, func) {
//     for (var i = 0; i < array.length; i++ ) {
//         func(array[i]);
//     }
// }


console.log("**** printReverse ****");
printReverse([1, 2, 3, 4, 5]);
printReverse(["a", "b", "c"]);
printReverse([]);

console.log("**** isUniform ****");
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "c"]));
console.log(isUniform(["b", "b", "b"]));
console.log(isUniform([]));
console.log(isUniform([1]));

console.log("**** sumArray ****");
console.log(sumArray([1,2,3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));
console.log(sumArray([]));
console.log(sumArray([1, 2, "a"]));
console.log(sumArray([1]));

console.log("**** max ****");
console.log(max([1,2,3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));
console.log(max([]));
console.log(max([1, 2, "a"]));
console.log(max([1]));

function printReverse(array) {
    var len = array.length;
    if (len <= 0) {
        console.log("printReverse: Empty array");
        return;
    }

    for (var i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function isUniform(array) {
    var len = array.length;
    if (len <= 0)  {
        console.log("isUniform: Empty array");
        return;
    } 

    // Use a for loop instead of forEach because the return
    // in a forEach would be only in the input function and
    // then isUniform would always return true (scoping).
    console.log(array);
    var first = array[0];
    for (var i = 1; i < len; i++) {
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
    // array.forEach(function(num) {
    // foreach(array, function(num) {
    array.myForEach(function(num) {
        if (isNaN(num)) {
            console.log(num + " is not a number!");
        } else {
            sum += num;
        }
    });

    return sum;
}

function max(array) {
    var len = array.length;
    if (len <= 0)  {
        console.log("max: Empty array");
        return;
    } 

    console.log(array);
    var max = array[0];
    for (var i = 1; i < len; i++) {
        var num = array[i];
        if (isNaN(num)) {
            console.log(num + " is not a number!");
        } else if (num > max) {
            max = num;
        }
    }

    return max;
}

