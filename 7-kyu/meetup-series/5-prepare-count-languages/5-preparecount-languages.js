var list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

//Best practices with forEach
function countLanguages() {
    var count = {};
    list.forEach(e => count[e.language] = (count[e.language] || 0) + 1);
    return count;
}
// console.log(countLanguages());



//Short solution with reduce
const countLanguagesShort = list => list.reduce((languages, { language }) => ((languages[language] = (languages[language] || 0) + 1), languages), {})

// console.log(countLanguagesShort());



//loop solution
function countLanguages() {

    let langCount = {};

    // loop through each object in the array
    for (let i = 0; i < list.length; i++) {
        // find language for each developer
        // add language to object if it does exist
        if (langCount[list[i].language] === undefined) {
            langCount[list[i].language] = 1;
        } else {
            // otherwise increment language count by 1
            langCount[list[i].language]++;
        }
    }
    // return object
    return langCount;
}

console.log(countLanguages());