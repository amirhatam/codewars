array = [[1, 2, 3],
[8, 9, 4],
[7, 6, 5]]

// One solution
const snail = () => {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            newArr.push(array[i][j])
        }
    }
    return newArr.sort((a, b) => a - b);
}

// console.log(snail());

// Another solution
var snail2 = function (array) {
    var rotate = function (array) {
        var a = [];
        for (var i = 0; i < array.length; i++)
            for (var j = 0; j < array[i].length; j++) {
                var k = array[i].length - 1 - j;
                a[k] = a[k] || [];
                a[k][i] = array[i][j];
            }
        return a;
    };

    var r = [];
    while (array.length > 0) {
        r = r.concat(array.shift());
        array = rotate(array);
    }
    return r;
};

// console.log(snail2(array));


// Best Practice with While solution
const snailWhile = function (array) {
    var result;
    while (array.length) {
        // Steal the first row.
        result = (result ? result.concat(array.shift()) : array.shift());
        // Steal the right items.
        for (var i = 0; i < array.length; i++)
            result.push(array[i].pop());
        // Steal the bottom row.
        result = result.concat((array.pop() || []).reverse());
        // Steal the left items.
        for (var i = array.length - 1; i >= 0; i--)
            result.push(array[i].shift());
    }
    return result;
}

console.log(snailWhile(array));

// Best Practice with While solution
function snailWhile2(array) {
    var vector = [];
    while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }
    return vector;
}

// console.log(snailWhile2(array));