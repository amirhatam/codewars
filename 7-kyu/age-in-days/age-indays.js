// It's not completed  Passed: 2  Failed: 1
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
        resMonth = (month + 12) - m
        resYear = (year - 1)
    } else {
        resMonth = month - m
        resYear = year
    }
    resYear -= y

    // console.log("resYear", resYear);
    // console.log("y", y);

    const age = [resYear, "Years, ", resMonth, "Months, ", resDay, "Days"]
    const ageInDays = (resYear * 365) + (resMonth * 31) + resDay


    const res = `You are ${ageInDays} days old`
    return res

}

console.log(ageCalculator(2007, 11, 27));
// ageCalculator(1986, 10, 10)





