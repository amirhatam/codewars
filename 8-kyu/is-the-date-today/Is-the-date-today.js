//MY Best practices
const isTodayB = (date) => new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-0' + new Date().getDate() == date



// const isToday = (date) => {
//     const today = new Date().getFullYear() + '-0' + (new Date().getMonth() + 1) + '-0' + new Date().getDate();
//     return today == date
// }

//Another Best practices
function isToday(date) {
    console.log(date.toDateString());
    return new Date().toDateString() === date.toDateString();
}


console.log(isToday("2022-03-07"));