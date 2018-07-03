var array = [34, 22, 1, 4, 7, 12, 11];

function countEvens(array) {
    var evens = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evens.push(array[i]);  
        }
    }
    return evens;
}

console.log(countEvens(array));