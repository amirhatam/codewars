const str1 = "Hello World"
const str2 = "1234!_ "

//One solution
const doubleCh = (str) => {
    const arrStr = str.split("")
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        newArr.push(arrStr[i] += arrStr[i])
    }
    return newArr.join("")
}

// console.log(doubleCh(str2))

//BEST Practices
const doubleChar = (str) => str.split("").map(c => c + c).join("");

console.log(doubleChar(str2))
