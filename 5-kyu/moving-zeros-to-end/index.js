//First solution
function moveZeros(arr) {
    let newArr = []
    let zeros = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        } else {
            zeros.push(arr[i])
        }
    }
    return [...newArr, ...zeros]
}

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));