let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];


//One solution without Math.max
const pairsNum = (a, b) => {
    let res = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i])
            res.push(a[i])
        else
            res.push(b[i])
    }
    return res
}

console.log(pairsNum(arr1, arr2));

//Math.max solution

function getLargerNumbers(a, b) {
    let newArray = [];
    for (i = 0; i < a.length; i++)
        newArray.push(Math.max(a[i], b[i]));

    return newArray;
}

console.log(getLargerNumbers(arr1, arr2));