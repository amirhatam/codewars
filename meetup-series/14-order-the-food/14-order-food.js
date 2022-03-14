const list = [
    {
        firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian'
    },
    {
        firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard'
    },
    {
        firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan'
    },
    {
        firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian'
    },
];

//BINGO My solution is the BEST practices
const orderFood = () => {
    let foodList = {}
    for (let dev of list)
        foodList[dev.meal] = (foodList[dev.meal] || 0) + 1

    return foodList
}

// console.log(orderFood());


//Another Best practice 
const orderFoods = list => list.reduce((acc, dev) => (acc[dev.meal] = (acc[dev.meal] || 0) + 1, acc), {})

console.log(orderFoods(list));