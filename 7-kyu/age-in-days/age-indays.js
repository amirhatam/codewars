// One Solution
const ageCalculator = (y, m, d) => {

    let year = new Date().getFullYear()
    let month = new Date().getMonth() + 1
    let day = new Date().getDate()

    let resDay = 0
    let resMonth = 0
    let resYear = 0


    if (day < d) {
        resDay = (day + 31) - d
        resMonth = month - 1
    } else {
        resDay = day - d
    }

    if (month < m) {
        resMonth = (resMonth + 12) - m
        resYear = (year - 1)
    } else {
        resMonth = month - m
        resYear = year
    }
    resYear -= y

    const ageInDays = (resYear * 365) + (resMonth * 31) + resDay

    const res = `You are ${ageInDays} days old`
    return res
}

console.log(ageCalculator(2007, 04, 28));

//BEST Practices
const ageInDays = (y, m, d) => 'You are ' + (new Date() - new Date().setFullYear(y, m - 1, d)) / 86400000 + ' days old';

console.log(ageCalculator(2007, 04, 28));