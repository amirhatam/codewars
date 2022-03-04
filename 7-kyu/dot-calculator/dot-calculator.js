//BEST Practice ***
const dotCalculator = (dot) => {
    let sep = dot.split(' ')
    const num1 = sep[0].length
    const num2 = sep[2].length
    let res = "."

    switch (sep[1]) {
        case "+":
            res = res.repeat(num1 + num2)
            break;
        case "*":
            res = res.repeat(num1 * num2)
            break;
        case "-":
            res = res.repeat(num1 - num2)
            break;
        case "/":
            res = res.repeat(num1 / num2)
            break;

        default:
            console.log("Is not an allowed operator")
            break;
    }
    return res
}

console.log(dotCalculator(".. - .."));

//Another Best practices 
function dotCalculator(equation) {
    let txt = equation.split` `
    return ".".repeat(eval(`${txt[0].length}${txt[1]}${txt[2].length}`.replace("//", "/")))
}