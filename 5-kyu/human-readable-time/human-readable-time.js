//ES6 version
const timeES6 = (s) => {
    let res = 0
    if (s <= 359999) {
        let hh = Math.floor(s / 3600)
        if (hh < 10) {
            hh = '0' + hh
        }
        let rest = s % 3600
        let mm = Math.floor(rest / 60)
        if (mm < 10) {
            mm = '0' + mm
        }
        let ss = rest % 60
        if (ss < 10) {
            ss = '0' + ss
        }
        return res = `${hh}:${mm}:${ss}`

    } else {
        return null
    }
}
console.log(timeES6(3599));

//ES5 version
function timeES5(seconds) {
    if (seconds < 0 || seconds > 360000) {
        return null;
    }

    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    if (hours < 10) {
        hours = '0' + hours;
    }

    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return hours + ':' + minutes + ':' + seconds;
}
console.log(timeES5(3599));

//BEST Practice
function humanReadable(seconds) {
    var pad = function (x) { return (x < 10) ? "0" + x : x; }
    return pad(parseInt(seconds / (60 * 60))) + ":" +
        pad(parseInt(seconds / 60 % 60)) + ":" +
        pad(seconds % 60)
}
console.log(humanReadable(3599));
