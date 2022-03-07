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