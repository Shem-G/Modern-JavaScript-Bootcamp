// Function - input (argument), code, output (return value)

let greetUser = function (){
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function(num){
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convertFarenheitToCelsius

// Call a couple of times (32 -> 0) (68 -> 20)

//print the converted values

let convertFahrenheitToCelsius = function(temp){
    let celsius = (temp -32) * 5 / 9
    return celsius
}

let result = convertFahrenheitToCelsius(32)
let otherResult = convertFahrenheitToCelsius(68)

console.log(result)
console.log(otherResult)