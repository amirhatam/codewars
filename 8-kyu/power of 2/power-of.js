//Best practices
const powerOfTwo = (n) => {
    let res = []
    for (let i = 0; i <= n; i++) {
        res.push(Math.pow(2, i))
    }
    return res
}

console.log(powerOfTwo(9));


// One solution
function powersOfTwo(n) {
    let myArr = [];
    for (var i = 0; i <= n; i++) {
        myArr.push(i);
    }

    let mapped = myArr.map(function (num) {
        return Math.pow(2, num); // 2 goes first
    });
    return mapped;
}


// console.log(powersOfTwo(9));
