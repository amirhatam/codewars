let arr = [1, 1, 1, 1, 1, 2]

const uniqueNum = (e) => {
    if (e.length > 2) {
        let rep = arr.filter((item, index) => arr.indexOf(item) !== index)
        return arr.filter((item) => item !== rep[0])[0]
    }
}
console.log(uniqueNum(arr));

//BEST Practices-1
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

// console.log(findUniq(arr));

//Best practices-2
function findUniqDeux(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniqDeux(arr));