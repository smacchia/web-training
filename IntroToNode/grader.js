function average(numArray) {
    var total = 0;
    var numCount = numArray.length;
    numArray.forEach(function(num) {
        if (isNaN(num)) {
            numCount--;
        } else {
            total += num;
        }
    });
    return Math.round(total / numCount);
}

console.log(average([90, 98, 89, 100, 100, 86, 94]));
console.log(average([40, 65, 77, 82, 80, 54, 73, 63, 95, 49]));
console.log(average([100, 50, "a"]));
