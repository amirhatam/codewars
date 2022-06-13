//First solution
const convertArrStrToArrNum = (a) => a.map(e => Number(e))



console.log(convertArrStrToArrNum(["1.1", "2.2", "3.3"]));

//Best practices
function toNumberArray(stringarray) {
    return stringarray.map(parseFloat);
}