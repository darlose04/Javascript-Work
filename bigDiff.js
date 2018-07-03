var array = [33, 20, 5, 15, 45, 10, 24, 65];

Array.diff = function(array) {
    return Math.max.apply(Math, array) - Math.min.apply(Math, array);
}

console.log(Array.diff(array))