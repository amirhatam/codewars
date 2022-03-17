const str1 = "Hello World"
const str2 = "1234!_ "

//One solution
const doubleChar = (str) => {
    const arrStr = str.split("")
    let newArr = []
    for (let i = 0; i < arrStr.length; i++) {
        newArr.push(arrStr[i] += arrStr[i])
    }
    return newArr.join("")
}

console.log(doubleChar(str2))
