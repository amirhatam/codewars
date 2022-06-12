//First solution
function checkAlive(health) {
    if (health <= 0) {
        return false
    } else {
        return true
    }
}

// console.log(checkAlive(0));

//Short solution 
const aliveCheck = h => h > 0

console.log(aliveCheck(0));


//Best Practices
function checkAlive(health) {
    return health > 0;
}