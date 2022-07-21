//First solution
const doubledValue = (arr) => {
    let newArr = []
    // arr.forEach(e => newArr.push(e * 2))
    arr.map(e => newArr.push(e * 2))
    return newArr
}

// console.log(doubledValue([1, 2, 3]));

//Short way
const maps = arr => arr.map(x => x * 2)