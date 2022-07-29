// Solution A
function isAValidMessage(message) {

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

console.log(isAValidMessage("code4hello5"));
