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
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

console.log(pairsNum(arr1, arr2));