let convertFahrenheitToCelsius = function(temp){
    let celsius = (temp -32) * 5 / 9

    if(celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

let result = convertFahrenheitToCelsius(32)
let otherResult = convertFahrenheitToCelsius(68)

console.log(result)
console.log(otherResult)
