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

console.log(snail());

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

console.log(snail2(array));
