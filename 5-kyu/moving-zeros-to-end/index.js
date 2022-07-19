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

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));


//Best Practices
const moveZero = (a) => a.filter(e => e !== 0).concat(a.filter(e => e === 0))


console.log(moveZero([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
