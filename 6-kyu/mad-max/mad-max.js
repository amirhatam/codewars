const myArray = [1, 42, 112, 32, 21]

//First solution
function max(array) {
    if (array.length == 0) {
        return -Infinity;
    }
    else if (array.length == 1) {
        return array[0];
    }
    else if (array.length >= 2) {
        if (array[0] <= array[1]) {
            array.splice(0, 1);
            return max(array);
        }
        else {
            array.splice(1, 1);
            return max(array);
        }
    }
}

// console.log(max(myArray));
max(myArray)

// Best Solution
function max(arr) {
    if (!arr.length)
        return -Infinity;

    if (arr.length === 1)
        return arr[0];

    const [a, b] = [arr[0], max(arr.slice(1))];
    return a < b ? b : a;
}