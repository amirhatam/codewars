// Solution A
function solutionA(message) {

    const str = message.split(/[0-9]/g).filter((elm) => elm !== '');
    const num = message.split(/[a-zA-Z]/g).filter((elm) => elm !== '');
    let res;

    if (message === "") {
        return true;
    }

    if (/\s/.test(message)) {
        return false;
    }

    if (/[a-zA-Z]/.test(message[0])) {
        return false;
    }

    for (let i = 0; i < Math.min(str.length, num.length); i++) {
        if (str[i].length !== +num[i] || num.length !== str.length) {
            res = false;
        } else {
            res = true;
        }
    }
    // console.log(message)
    return res;
}

// console.log(solutionA("code4hello5"));


function isAValidMessage(message) {
    if (!message) return true

    while (message.length > 0) {
        let num = parseInt(message);

        if (isNaN(num)) return false;

        message = message.slice((num + "").length);

        let str = message.slice(0, num);
        let regex = RegExp('^[a-zA-Z]{' + num + '}$')

        if (!regex.test(str)) return false;

        message = message.slice(num);
    }
    return true;
}

console.log(isAValidMessage("4code5hello"));

