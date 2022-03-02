let arr = [1, 1, 1, 1, 1, 2]

const uniqueNum = (e) => {
    if (e.length > 2) {
        let rep = arr.filter((item, index) => arr.indexOf(item) !== index)
        return arr.filter((item) => item !== rep[0])[0]
    }
}
console.log(uniqueNum(arr));