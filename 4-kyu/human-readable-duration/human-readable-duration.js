//Best practices
function formatDuration(seconds) {
    const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (let key in time) {
        if (seconds >= time[key]) {
            let val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }
    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

console.log(formatDuration(50000000));


// Another solution
/*
const date = (s) => {
    let years = 0
    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0
    const separat = ", "
    const result = ""

    for (let i = 0; i <= s; i++) {
        seconds++
        if (seconds === 60) {
            minutes++
            seconds = 0
        }
        if (minutes === 60) {
            hours++
            minutes = 0
        }
        if (hours === 24) {
            days++
            hours = 0
        }
        if (days === 365) {
            years++
            days = 0
        }
    }
    if (years > 0) {
        if (years == 1)
            // result.push(`${years} year`)
            result `${years} year`
        else
            // result.push(`${years} years`)
            result.push(`${years} years`)
    }
    // if (days > 0) {
    //     if (days == 1)
    //         result.push(`${days} day`)
    //     else
    //         result.push(`${days} days`)
    // }
    // if (hours > 0) {
    //     if (hours == 1)
    //         result.push(`${hours} hour`)
    //     else
    //         result.push(`${hours} hours`)
    // }
    // if (minutes > 0) {
    //     if (minutes == 1)
    //         result.push(`${minutes} minute`)
    //     else
    //         result.push(`${minutes} minutes`)
    // }
    // if (seconds > 0) {
    //     if (seconds == 1)
    //         result.push(`${seconds} second`)
    //     else
    //         result.push(`${seconds} seconds`)
    // }

    console.log(result);
    // console.log(`${years} year${separat} ${days} day${separat} ${hours} hours ${separat} ${minutes} minutes ${separat} ${seconds} seconds`);
}

// console.log(date(3700));
date(70000000)*/