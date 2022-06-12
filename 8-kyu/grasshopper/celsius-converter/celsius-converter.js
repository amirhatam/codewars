//First Soltion But not accepted !!
const convertor = (t) => {
    let celsius = Math.round((t - 32) * 5 / 9)

    if (celsius < 0)
        return (celsius + " is freezing temperature")
    else
        return (celsius + " is above freezing temperature")

}

// console.log(convertor(56));

//Best practices
function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
        return (c + " is freezing temperature");
    else
        return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
}

// Another Best practices
const weatherInfoB = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ' : ''}freezing temperature`;

console.log(weatherInfoB(56));
